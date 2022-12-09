import requests
import json
import jwt

from django.utils.translation import gettext_lazy as _
from django.http import JsonResponse

from accounts.models import User
from rest_framework.views import APIView

# Create your views here.
SECRET_KEY = "christmas"
ALGORITHM = "HS256"

class KakaoLogin(APIView):
    def get(self, request):
        kakao_access_code=request.GET.get('code',None)
        print("\nkakaologin2 get함수 들어왔습니다!\n")
        url="https://kapi.kakao.com/v2/user/me"
        headers={
                "Authorization":f"Bearer {kakao_access_code}",
                "Content-type":"application/x-www-form-urlencoded; charset=utf-8"
            }
        kakao_response=requests.post(url,headers=headers)
        kakao_response=json.loads(kakao_response.text)
        
        print("\nkakao_response : "+str(kakao_response)+"\n")
        if User.objects.filter(u_id=kakao_response['id']).exists():
            print("User.objects.filter if문안으로 들어왔습니다!")
            user= User.objects.get(u_id=kakao_response['id'])
            #jwt_token = jwt.encode({'id':user.id}, SECRET_PRE+kakao_access_code,ALGORITHM)
            #print("user id : "+user.id+"\n")
            print("user name: "+user.username+"\n")
            #print(jwt_token)
            datadict = {
                "id" : user.u_id,
                "name" : user.username,
#                "token" : jwt_token.decode('utf-8'),
                "token" : user.jwt,
                "exist" : True,
                "solve_count": user.solve_count,
            }
               
            return JsonResponse(datadict)
        else: 
            print("\nelse문안으로 들어왔습니다!\n")
            
            #jwt_token = jwt.encode({'id':user.id}, SECRET_PRE+kakao_access_code, ALGORITHM)
            jwt_token = jwt.encode({'id':kakao_response['id']}, SECRET_KEY, ALGORITHM)
       
            User(
                u_id=kakao_response['id'],
                #user_email=kakao_response['kakao_account'].get('email',None),
                username=kakao_response['properties']['nickname'],
                jwt=jwt_token
                
            ).save()

            user = User.objects.get(u_id=kakao_response['id'])
            
            print(user.u_id)
            print(user.username)
            print(user.jwt)


            datadict = {
                "uid" : user.u_id,
                "name" : user.username,
                "exist" : False,
                "solve_count" : user.solve_count,
            }

            if type(jwt_token) != str:
                datadict["token"] = jwt_token.decode('utf-8')
            else:
                datadict["token"] = jwt_token

            return JsonResponse(datadict)

# 미현누나 부탁
class ChangeNickName(APIView):
    def get(self, request):
        user_jwt = request.data.get('jwt',None) # 토큰 받기
        new_nickname = request.data.get('nickname',None) # 새로운 닉네임 입력받기
        user_id = jwt.decode(user_jwt,SECRET_KEY,algorithms=ALGORITHM) # jwt토큰 디코드 한거 --> user_id
        user = User.objects.get(u_id = user_id['id']) # user 가져오기
        user.nickname = new_nickname
        user.save()
        
        datadic = {
            "id" : user_id,
            "name" : user.name,
            "token" : user_jwt,
            "exist" : True,
            "solve_count" : user.solve_count,
        }

        return JsonResponse(datadic)


class SolveQuestion(APIView):
    def post(self, request):
        user_jwt = request.data.get('jwt',None)
        user_id = jwt.decode(user_jwt,SECRET_KEY,algorithms=ALGORITHM)
        user = User.objects.get(u_id = user_id['id'])
        user.solve_count += 1
        user.save()

        return JsonResponse({"응답":"solve_count +1 !"})