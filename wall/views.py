from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view # function based 이기에 데코레이터를 사용한다.
from wall.models import quiz,deer,mixDeer,user_A,wreath,RealWreath,OrnamentList
from wall.serializers import quizSerializer,deerSerializer,mixdeerSerializer,user_ASerializer,wreathSerializer#models안의 quiz와 우리가 만든 serializer 도 가지고 오자.
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

@api_view(['GET'])
def sendWreath(request):
    
    num = 9
    ran = random.randint(1,num)
    wreathes = wreath.objects.get(id = ran) # 오너먼트 테이블에서 아무렇게나 하나 뽑는거
    serializer = wreathSerializer(data = wreathes)
    
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status = status.HTTP_201_CREATED)
    
    return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    

def sendMixdeer(u_id): # 완성된 사슴 객체 보내기, 사슴 객체 개수 구해야 함. 랜덤으로
    print("sendMixdeer에 들어왔습니다.")
    # count = 필드 개수
    # 요소마다 랜덤으로 뽑아서 스키마에 넣고
    # 완성된 사슴 리턴
    user = User.objects.get(u_id = u_id['id'])

    num = 8
    ran = random.randint(2,num)
    print(deer.objects.get(pk=ran))
    _horn = (deer.objects.get(pk = ran)).horn
    
    ran = random.randint(2,num)
    _hair = (deer.objects.get(pk = ran)).hair
    
    ran = random.randint(2,num)
    _eye = (deer.objects.get(pk = ran)).eye
    
    ran = random.randint(2,num)
    _body_color = (deer.objects.get(pk = ran)).body_color
    
    ran = random.randint(2,num)
    _body_deco = (deer.objects.get(pk = ran)).body_deco
    
    
    mixDeer.objects.create(
            user_id = user,
            m_horn = _horn,
            m_hair = _hair,
            m_eye = _eye,
            m_body_color = _body_color,
            m_body_deco = _body_deco
        )
    
    
    mixDeers = mixDeer.objects.last()
    
    serializer = mixdeerSerializer(mixDeers,many = False)
    print("sendMixdeer를 끝마칩니다.")
    
    return Response(serializer.data)

class deerList(APIView):    
    def get(self, request):
        user_jwt = request.GET.get('jwt',None)
        user_id = jwt.decode(user_jwt,SECRET_KEY,algorithms=ALGORITHM)
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
        print("index : "+index)
        ornament = request.data.get('ornament',None)
        print("ornament : "+ornament)
        user_id = jwt.decode(user_jwt,SECRET_KEY,algorithms=ALGORITHM)
        user = User.objects.get(u_id=user_id['id'])
        
        if RealWreath.objects.filter(user_id=user_id['id']).exists():
                if index=='1' : 
                    user_realwreath = RealWreath.objects.get(user_id = user.u_id)
                    user_realwreath.orn1 = ornament
                    user_realwreath.save()
                if index=='2' : 
                    user_realwreath = RealWreath.objects.get(user_id = user.u_id)
                    user_realwreath.orn2 = ornament
                    user_realwreath.save()
                if index=='3' : 
                    user_realwreath = RealWreath.objects.get(user_id = user.u_id)
                    user_realwreath.orn3 = ornament
                    user_realwreath.save()
                if index=='4' : 
                    user_realwreath = RealWreath.objects.get(user_id = user.u_id)
                    user_realwreath.orn4 = ornament
                    user_realwreath.save()
                if index=='5' : 
                    user_realwreath = RealWreath.objects.get(user_id = user.u_id)
                    user_realwreath.orn5 = ornament
                    user_realwreath.save()
                if index=='6' : 
                    user_realwreath = RealWreath.objects.get(user_id = user.u_id)
                    user_realwreath.orn6 = ornament
                    user_realwreath.save()
                if index=='7' : 
                    user_realwreath = RealWreath.objects.get(user_id = user.u_id)
                    user_realwreath.orn7 = ornament
                    user_realwreath.save()

        else:
            RealWreath(
                user_id = user,

            ).save()
            if index=='1' : 
                user_realwreath = RealWreath.objects.get(user_id = user.u_id)
                user_realwreath.orn1 = ornament
                user_realwreath.save()
            if index=='2' : 
                user_realwreath = RealWreath.objects.get(user_id = user.u_id)
                user_realwreath.orn2 = ornament
                user_realwreath.save()
            if index=='3' : 
                user_realwreath = RealWreath.objects.get(user_id = user.u_id)
                user_realwreath.orn3 = ornament
                user_realwreath.save()
            if index=='4' : 
                user_realwreath = RealWreath.objects.get(user_id = user.u_id)
                user_realwreath.orn4 = ornament
                user_realwreath.save()
            if index=='5' : 
                user_realwreath = RealWreath.objects.get(user_id = user.u_id)
                user_realwreath.orn5 = ornament
                user_realwreath.save()
            if index=='6' : 
                user_realwreath = RealWreath.objects.get(user_id = user.u_id)
                user_realwreath.orn6 = ornament
                user_realwreath.save()
            if index=='7' : 
                user_realwreath = RealWreath.objects.get(user_id = user.u_id)
                user_realwreath.orn7 = ornament
                user_realwreath.save()

        return JsonResponse({"응답":"리스저장 완료"})

def addOrnament(user_id,orn_src):
    print("addOrnament함수에 들어왔습니다")
    user = User.objects.get(u_id = user_id['id'])
    if OrnamentList.objects.filter(user_id=user_id['id']).exists():
        pass
    else:
        OrnamentList(
                user_id = user,
            ).save()
    
    user_ornamentlist = OrnamentList.objects.get(user_id = user.u_id)

    if user_ornamentlist.src1 =='-1':
        user_ornamentlist.src1 = orn_src
        user_ornamentlist.save()
        return 0
    if user_ornamentlist.src2 == '-1':
        user_ornamentlist.src2 = orn_src
        user_ornamentlist.save()
        return 0
    if user_ornamentlist.src3 == '-1':
        user_ornamentlist.src3 = orn_src
        user_ornamentlist.save()
        return 0
    if user_ornamentlist.src4 == '-1':
        user_ornamentlist.src4 = orn_src
        user_ornamentlist.save()
        return 0
    if user_ornamentlist.src5 == '-1':
        user_ornamentlist.src5 = orn_src
        user_ornamentlist.save()
        return 0
    if user_ornamentlist.src6 == '-1':
        user_ornamentlist.src6 = orn_src
        user_ornamentlist.save()
        return 0
    if user_ornamentlist.src7 == '-1':
        user_ornamentlist.src7 = orn_src
        user_ornamentlist.save()
        return 0
    if user_ornamentlist.src8 == '-1':
        user_ornamentlist.src8 = orn_src
        user_ornamentlist.save()
        return 0
    if user_ornamentlist.src9 == '-1':
        user_ornamentlist.src9 = orn_src
        user_ornamentlist.save()
        return 0
    if user_ornamentlist.src10 == '-1':
        user_ornamentlist.src10 = orn_src
        user_ornamentlist.save()
        return 0
    return JsonResponse({"응답":"오너먼트를 다 받았어요!"})

class OrnamentView(APIView):
    def post(self,request):
        user_jwt = request.data.get('jwt',None)
        orn_src = request.data.get('src',None)
        user_id = jwt.decode(user_jwt,SECRET_KEY,algorithms=ALGORITHM)
        user = User.objects.get(u_id = user_id['id'])
        user_ornamentlist = OrnamentList.objects.get(user_id = user.u_id)

        print(user_ornamentlist.src2)

        if user_ornamentlist.src1 == orn_src :
            user_ornamentlist.src2 = '-1'
            user_ornamentlist.save()
        if user_ornamentlist.src2 == orn_src :
            user_ornamentlist.src2 = '-1'
            user_ornamentlist.save()
        if user_ornamentlist.src3 == orn_src :
            user_ornamentlist.src2 = '-1'
            user_ornamentlist.save()
        if user_ornamentlist.src4 == orn_src :
            user_ornamentlist.src2 = '-1'
            user_ornamentlist.save()
        if user_ornamentlist.src5 == orn_src :
            user_ornamentlist.src2 = '-1'
            user_ornamentlist.save()
        if user_ornamentlist.src6 == orn_src :
            user_ornamentlist.src2 = '-1'
            user_ornamentlist.save()
        if user_ornamentlist.src7 == orn_src :
            user_ornamentlist.src2 = '-1'
            user_ornamentlist.save()
        if user_ornamentlist.src8 == orn_src :
            user_ornamentlist.src2 = '-1'
            user_ornamentlist.save()
        if user_ornamentlist.src9 == orn_src :
            user_ornamentlist.src2 = '-1'
            user_ornamentlist.save()
        if user_ornamentlist.src10 == orn_src :
            user_ornamentlist.src2 = '-1'
            user_ornamentlist.save()
        
        return JsonResponse({" 응답 ":" 클릭하신 오너먼트가 오너먼트 리스트에서 삭제되었습니다!!"})

    def get(self,request):
        user_jwt = request.data.get('jwt',None)
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
                


            