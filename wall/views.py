from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view # function based 이기에 데코레이터를 사용한다.
from wall.models import deer,mixDeer,RealWreath,OrnamentList,Sock
from wall.serializers import deerSerializer,mixdeerSerializer#models안의 quiz와 우리가 만든 serializer 도 가지고 오자.
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import Http404
import random
from django.http import JsonResponse
from django.core import serializers


from accounts.models import User
import jwt, json


SECRET_KEY = "christmas"
ALGORITHM = "HS256"

def sendMixdeer(u_id): # 완성된 사슴 객체 보내기, 사슴 객체 개수 구해야 함. 랜덤으로
    user = User.objects.get(u_id = u_id['id'])

    num = 7
    ran = random.randint(1,num)
    _horn = (deer.objects.get(pk = ran)).horn
    
    ran = random.randint(1,num)
    _hair = (deer.objects.get(pk = ran)).hair
    
    ran = random.randint(1,num)
    _eye = (deer.objects.get(pk = ran)).eye
    
    ran = random.randint(1,num)
    _body_color = (deer.objects.get(pk = ran)).body_color
    
    ran = random.randint(1,num)
    _body_deco = (deer.objects.get(pk = ran)).body_deco
    
    
    mixDeer.objects.create(
            user_id = user,
            m_horn = _horn,
            m_hair = _hair,
            m_eye = _eye,
            m_body_color = _body_color,
            m_body_deco = _body_deco
        )
    
    #가장 최근에 얻은 걸 내보내줘야
    
    datadict = {
        "m_horn" : _horn,
        "m_hair" : _hair,
        "m_eye" : _eye,
        "m_body_color" : _body_color,
        "m_body_deco" : _body_deco
    }
    
    
    
    return JsonResponse(datadict)


class deerList(APIView):    
    def get(self, request):
        user_jwt = request.GET.get('jwt',None)
        user_id = jwt.decode(user_jwt,SECRET_KEY,algorithms=ALGORITHM)

        if mixDeer.objects.filter(user_id=user_id['id']).exists():
            pass
        else:
            deer = list()
            return JsonResponse(deer, safe=False)

        deer = list(mixDeer.objects.filter(user_id = user_id['id']).values())

        return JsonResponse(deer,safe=False)

class RealWreathView(APIView):    
    def get(self, request):
        user_jwt = request.GET.get('jwt',None)
        user_id = jwt.decode(user_jwt,SECRET_KEY,algorithms=ALGORITHM)

        user_wreath = RealWreath.objects.get(user_id = user_id['id'])
        datadict = {
                "ornaments" : [
                    user_wreath.orn1,
                    user_wreath.orn2,
                    user_wreath.orn3,
                    user_wreath.orn4,
                    user_wreath.orn5,
                    user_wreath.orn6,
                    user_wreath.orn7,
                ]
            }
        return JsonResponse(datadict)

    def post(self, request):
        user_jwt = request.data.get('jwt',None)
        index = request.data.get('index',None)
        src = request.data.get('src',None)
        user_id = jwt.decode(user_jwt,SECRET_KEY,algorithms=ALGORITHM)
        user = User.objects.get(u_id=user_id['id'])
        if RealWreath.objects.filter(user_id=user_id['id']).exists():
                if index== 1 : 
                    user_realwreath = RealWreath.objects.get(user_id = user)
                    if user_realwreath.orn1 != (-1):
                        addOrnament(user_id,user_realwreath.orn1)
                    user_realwreath.orn1 = src
                    user_realwreath.save()
                    return JsonResponse({"응답":"src가 리스의 1번자리에 저장되었습니다!"})
                if index==2 : 
                    user_realwreath = RealWreath.objects.get(user_id = user)
                    if user_realwreath.orn2 != (-1):
                        addOrnament(user_id['id'],user_realwreath.orn2)
                    user_realwreath.orn2 = src
                    user_realwreath.save()
                    return JsonResponse({"응답":"src가 리스의 2번 자리에 저장되었습니다!"})
                if index==3 : 
                    user_realwreath = RealWreath.objects.get(user_id = user)
                    if user_realwreath.orn3 != (-1):
                        addOrnament(user_id['id'],user_realwreath.orn3)
                    user_realwreath.orn3 = src
                    user_realwreath.save()
                    return JsonResponse({"응답":"src가 리스의 3번 자리에 저장되었습니다!"})
                if index==4 : 
                    user_realwreath = RealWreath.objects.get(user_id = user)
                    if user_realwreath.orn4 != (-1):
                        addOrnament(user_id['id'],user_realwreath.orn4)
                    user_realwreath.orn4 = src
                    user_realwreath.save()
                    return JsonResponse({"응답":"src가 리스의 4번 자리에 저장되었습니다!"})
                if index==5 : 
                    user_realwreath = RealWreath.objects.get(user_id = user)
                    if user_realwreath.orn5 != (-1):
                        addOrnament(user_id['id'],user_realwreath.orn5)
                    user_realwreath.orn5 = src
                    user_realwreath.save()
                    return JsonResponse({"응답":"src가 리스의 5번 자리에 저장되었습니다!"})
                if index==6 : 
                    user_realwreath = RealWreath.objects.get(user_id = user)
                    if user_realwreath.orn6 != (-1):
                        addOrnament(user_id['id'],user_realwreath.orn6)
                    user_realwreath.orn6 = src
                    user_realwreath.save()
                    return JsonResponse({"응답":"src가 리스의 6번 자리에 저장되었습니다!"})
                if index==7 : 
                    user_realwreath = RealWreath.objects.get(user_id = user)
                    if user_realwreath.orn7 != (-1):
                        addOrnament(user_id['id'],user_realwreath.orn7)
                    user_realwreath.orn7 = src
                    user_realwreath.save()
                    return JsonResponse({"응답":"src가 리스의 7번 자리에 저장되었습니다!"})
        else:
            return JsonResponse({"error":"RealWreath DB에 등록되어있지 않은 사용자 입니다."})
        

def addOrnament(user_id,orn_src):
    user = User.objects.get(u_id = user_id['id'])
    if OrnamentList.objects.filter(user_id=user_id['id']).exists():
        user_ornamentlist = OrnamentList.objects.get(user_id = user.u_id)
        if user_ornamentlist.src1 =='-1':
            user_ornamentlist.src1 = orn_src
            user_ornamentlist.save()
            return JsonResponse({"응답":"1번 오너먼트 자리에 src를 저장했습니다!"})
        if user_ornamentlist.src2 == '-1':
            user_ornamentlist.src2 = orn_src
            user_ornamentlist.save()
            return JsonResponse({"응답":"2번 오너먼트 자리에 src를 저장했습니다!"})
        if user_ornamentlist.src3 == '-1':
            user_ornamentlist.src3 = orn_src
            user_ornamentlist.save()
            return JsonResponse({"응답":"3번 오너먼트 자리에 src를 저장했습니다!"})
        if user_ornamentlist.src4 == '-1':
            user_ornamentlist.src4 = orn_src
            user_ornamentlist.save()
            return JsonResponse({"응답":"4번 오너먼트 자리에 src를 저장했습니다!"})
        if user_ornamentlist.src5 == '-1':
            user_ornamentlist.src5 = orn_src
            user_ornamentlist.save()
            return JsonResponse({"응답":"5번 오너먼트 자리에 src를 저장했습니다!"})
        if user_ornamentlist.src6 == '-1':
            user_ornamentlist.src6 = orn_src
            user_ornamentlist.save()
            return JsonResponse({"응답":"6번 오너먼트 자리에 src를 저장했습니다!"})
        if user_ornamentlist.src7 == '-1':
            user_ornamentlist.src7 = orn_src
            user_ornamentlist.save()
            return JsonResponse({"응답":"7번 오너먼트 자리에 src를 저장했습니다!"})
        if user_ornamentlist.src8 == '-1':
            user_ornamentlist.src8 = orn_src
            user_ornamentlist.save()
            return JsonResponse({"응답":"8번 오너먼트 자리에 src를 저장했습니다!"})
        if user_ornamentlist.src9 == '-1':
            user_ornamentlist.src9 = orn_src
            user_ornamentlist.save()
            return JsonResponse({"응답":"9번 오너먼트 자리에 src를 저장했습니다!"})
        if user_ornamentlist.src10 == '-1':
            user_ornamentlist.src10 = orn_src
            user_ornamentlist.save()
            return JsonResponse({"응답":"10번 오너먼트 자리에 src를 저장했습니다!"})
    else:
        return JsonResponse({"error":"Ornamentlist DB에 등록되어있지 않은 사용자 입니다."})
    return JsonResponse({"응답":"오너먼트를 다 받았어요!"})

class OrnamentView(APIView):
    def post(self,request): #delete Ornament
        user_jwt = request.data.get('jwt',None)
        orn_src = request.data.get('src',None)
        user_id = jwt.decode(user_jwt,SECRET_KEY,algorithms=ALGORITHM)
        user = User.objects.get(u_id = user_id['id'])
        user_ornamentlist = OrnamentList.objects.get(user_id = user.u_id)


        if user_ornamentlist.src1 == orn_src :
            user_ornamentlist.src1 = '-1'
            user_ornamentlist.save()
            return JsonResponse({" 응답 ":" 클릭하신 오너먼트가 1번자리에서 삭제되었습니다!!"})
        if user_ornamentlist.src2 == orn_src :
            user_ornamentlist.src2 = '-1'
            user_ornamentlist.save()
            return JsonResponse({" 응답 ":" 클릭하신 오너먼트가 2번자리에서 삭제되었습니다!!"})
        if user_ornamentlist.src3 == orn_src :
            user_ornamentlist.src3 = '-1'
            user_ornamentlist.save()
            return JsonResponse({" 응답 ":" 클릭하신 오너먼트가 3번자리에서 삭제되었습니다!!"})
        if user_ornamentlist.src4 == orn_src :
            user_ornamentlist.src4 = '-1'
            user_ornamentlist.save()
            return JsonResponse({" 응답 ":" 클릭하신 오너먼트가 4번자리에서 삭제되었습니다!!"})
        if user_ornamentlist.src5 == orn_src :
            user_ornamentlist.src5 = '-1'
            user_ornamentlist.save()
            return JsonResponse({" 응답 ":" 클릭하신 오너먼트가 5번자리에서 삭제되었습니다!!"})
        if user_ornamentlist.src6 == orn_src :
            user_ornamentlist.src6 = '-1'
            user_ornamentlist.save()
            return JsonResponse({" 응답 ":" 클릭하신 오너먼트가 6번자리에서 삭제되었습니다!!"})
        if user_ornamentlist.src7 == orn_src :
            user_ornamentlist.src7 = '-1'
            user_ornamentlist.save()
            return JsonResponse({" 응답 ":" 클릭하신 오너먼트가 7번자리에서 삭제되었습니다!!"})
        if user_ornamentlist.src8 == orn_src :
            user_ornamentlist.src8 = '-1'
            user_ornamentlist.save()
            return JsonResponse({" 응답 ":" 클릭하신 오너먼트가 8번자리에서 삭제되었습니다!!"})
        if user_ornamentlist.src9 == orn_src :
            user_ornamentlist.src9 = '-1'
            user_ornamentlist.save()
            return JsonResponse({" 응답 ":" 클릭하신 오너먼트가 9번자리에서 삭제되었습니다!!"})
        if user_ornamentlist.src10 == orn_src :
            user_ornamentlist.src10 = '-1'
            user_ornamentlist.save()
            return JsonResponse({" 응답 ":" 클릭하신 오너먼트가 10번자리에서 삭제되었습니다!!"})
        
        return JsonResponse({" 응답 ":" 삭제된 오너먼트가 없습니다"})

    def get(self,request): # give Ornament list
        user_jwt = request.GET.get('jwt',None)
        print(type(user_jwt))
        user_id = jwt.decode(user_jwt,SECRET_KEY,algorithms=ALGORITHM)
        user = User.objects.get(u_id = user_id['id'])
        user_ornamentlist = OrnamentList.objects.get(user_id = user.u_id)

        datadict ={
                "src1" :user_ornamentlist.src1,
                "src2" :user_ornamentlist.src2,
                "src3" :user_ornamentlist.src3,
                "src4" :user_ornamentlist.src4,
                "src5" :user_ornamentlist.src5,
                "src6" :user_ornamentlist.src6,
                "src7" :user_ornamentlist.src7,
                "src8" :user_ornamentlist.src8,
                "src9" :user_ornamentlist.src9,
                "src10" :user_ornamentlist.src10,
            }

        return JsonResponse(datadict)

class SolveQuestion(APIView):
    def post(self, request):
        user_jwt = request.data.get('jwt',None)
        orn_src = request.data.get('src',None)
        user_id = jwt.decode(user_jwt,SECRET_KEY,algorithms=ALGORITHM)
        user = User.objects.get(u_id = user_id['id'])
        user.solve_count += 1
        solve_count=user.solve_count
        user.save()
        sendMixdeer(user_id)
        addOrnament(user_id,orn_src)

        return JsonResponse({"solve_count":solve_count})
                

class SocksView(APIView):
    def post(self, request):
        
        num=request.data.get('num',None)
        user_jwt = request.data.get('jwt',None)
        user_id = jwt.decode(user_jwt,SECRET_KEY,algorithms=ALGORITHM)
        user = User.objects.get(u_id = user_id['id'])

        if(num == 1):
            if Sock.objects.filter(user_id=user).exists():

                sock = Sock.objects.get(user_id = user_id['id'])
                sock.sock1_name = request.data.get('name',None)
                sock.sock1_img = request.data.get('url',None)
                sock.save()
                return JsonResponse({"1번 양말":"저장되었습니다"})
            else: 
                return JsonResponse({"error":"Sock DB에 등록되어있지 않은 사용자 입니다."})

        elif(num == 2):

            if Sock.objects.filter(user_id=user).exists():

                sock = Sock.objects.get(user_id = user_id['id'])
                sock.sock2_name = request.data.get('name',None)
                sock.sock2_img = request.data.get('url',None)
                sock.save()
                return JsonResponse({"2번 양말":"저장되었습니다"})
                
            else: 
                return JsonResponse({"error":"Sock DB에 등록되어있지 않은 사용자 입니다."})   
                
        elif(num == 3):
            if Sock.objects.filter(user_id=user).exists():

                sock = Sock.objects.get(user_id = user_id['id'])
                sock.sock3_name = request.data.get('name',None)
                sock.sock3_img = request.data.get('url',None)
                sock.save()
                return JsonResponse({"3번 양말":"저장되었습니다"})
                
            else: 
                return JsonResponse({"error":"Sock DB에 등록되어있지 않은 사용자 입니다."})
        return JsonResponse({"error":"num이 1~3을 벗어났습니다"})
                
            
    def get(self, request):
        user_jwt = request.GET.get('jwt',None)
        user_id = jwt.decode(user_jwt,SECRET_KEY,algorithms=ALGORITHM)
        sock = Sock.objects.get(user_id = user_id['id'])
        num = request.GET.get('num',None)

        if(num == '1'):
            datadict = {
                "name" : sock.sock1_name,
                "url" : sock.sock1_img,
            }
            return JsonResponse(datadict)
            
        elif(num=='2'):
            datadict = {
                "name" : sock.sock2_name,
                "url" : sock.sock2_img,
            }
            return JsonResponse(datadict)
            
        elif(num=='3'):
            datadict = {
                "name" : sock.sock3_name,
                "url" : sock.sock3_img,
            }
            return JsonResponse(datadict)

        
        else: 
            return JsonResponse({"error":"num이 1~3을 벗어낫습니다"})
            
