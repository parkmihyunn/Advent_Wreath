import requests
import json
import jwt

from django.utils.translation import gettext_lazy as _
from django.http import JsonResponse

from accounts.models import User
from wall.models import RealWreath,OrnamentList,Sock
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

        if User.objects.filter(u_id=kakao_response['id']).exists():
            user= User.objects.get(u_id=kakao_response['id'])
            # user.username = "시험용"
            # user.jwt = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjU0MjQ5MzM5Mn0.Q5Oz0fbeFIqzfY8xewNxxXhu-MyMPpoMIjEDm25YKGM"
            # user.u_id = "2542493392"
            
            user.save()
            datadict = {
                "name" : user.username,
                "token" : user.jwt,
                "exist" : True,
                "solve_count": user.solve_count,
                "nickname" : user.nickname,
            }
            # RealWreath(
            #     user_id=User.objects.get(u_id=user.u_id)
            # ).save()

            # OrnamentList(
            #     user_id=User.objects.get(u_id=user.u_id)
            # ).save()

            # Sock(
            #     user_id=User.objects.get(u_id=user.u_id)
            # ).save()
               
            return JsonResponse(datadict)
        else:
    
            jwt_token = jwt.encode({'id':kakao_response['id']}, SECRET_KEY, ALGORITHM)
            if type(jwt_token) == bytes:
                jwt_token = jwt.encode({'id':kakao_response['id']}, SECRET_KEY, ALGORITHM).decode('utf-8')
            user_id = kakao_response['id']
            User(
                u_id=kakao_response['id'],
                username=kakao_response['properties']['nickname'],
                jwt=jwt_token
            ).save()

            RealWreath(
                user_id=User.objects.get(u_id=user_id)
            ).save()

            OrnamentList(
                user_id=User.objects.get(u_id=user_id)
            ).save()

            Sock(
                user_id=User.objects.get(u_id=user_id)
            ).save()
            

            user = User.objects.get(u_id=kakao_response['id'])
            datadict = {
                "name" : user.username,
                "exist" : False,
                "solve_count" : user.solve_count,
                "nickname" : user.nickname,
                "token" : user.jwt,
            }

            return JsonResponse(datadict)


class ChangeNickName(APIView):
    def post(self, request):
        user_jwt = request.data.get('jwt',None)
        new_nickname = request.data.get('nickname',None)

        user_id = jwt.decode(user_jwt,SECRET_KEY,algorithms=ALGORITHM)
        user = User.objects.get(u_id = user_id['id'])
        user.nickname = new_nickname
        user.save()

        datadict = {
                "name" : user.username,
                "exist" : True,
                "solve_count" : user.solve_count,
                "nickname" : user.nickname,

            }

        if type(user_jwt) != str:
            datadict["token"] = user_jwt.decode('utf-8')
        else:
            datadict["token"] = user_jwt
        return JsonResponse(datadict)




class Nickname(APIView):
    def get(self, request):
        user_jwt=request.GET.get('jwt',None)
        if type(user_jwt) != str:
                user_jwt = user_jwt.decode('utf-8')
        user_id = jwt.decode(user_jwt,SECRET_KEY,algorithms=ALGORITHM)
        user = User.objects.get(u_id = user_id['id'])

        datadict = {
              "nickname" : user.nickname,
        }
               
        return JsonResponse(datadict)