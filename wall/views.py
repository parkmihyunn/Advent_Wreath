from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view # function based 이기에 데코레이터를 사용한다.
from wall.models import quiz,deer,mixDeer,user_A,wreath,RealWreath,Sock
from wall.serializers import quizSerializer,deerSerializer,mixdeerSerializer,user_ASerializer,sockSerializer, wreathSerializer#models안의 quiz와 우리가 만든 serializer 도 가지고 오자.
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import Http404
import random
from django.http import JsonResponse


from accounts.models import User
import jwt

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
    
    

@api_view(['POST'])
def allDeer(u_id):
    deer = mixDeer.objects.filter(user_id = u_id)
    serializer = mixdeerSerializer(deer,many = True)
    
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status = status.HTTP_201_CREATED)
    
    return Response(serializer.erros, status = status.HTTP_400_BAD_REQUSET)



    
    

@api_view(['POST'])
def sendMixdeer(u_id): # 완성된 사슴 객체 보내기, 사슴 객체 개수 구해야 함. 랜덤으로
    
    # count = 필드 개수
    # 요소마다 랜덤으로 뽑아서 스키마에 넣고
    # 완성된 사슴 리턴
    
    num = 6
    ran = random.randint(1,num)
    _horn = (deer.objects.get(pk = ran)).horn   
    
    ran = random.randint(1,num)
    _hair = (deer.objects.get(pk = ran)).headdeco
    
    ran = random.randint(1,num)
    _eye = (deer.objects.get(pk = ran)).eye
    
    ran = random.randint(1,num)
    _body_color = (deer.objects.get(pk = ran)).body
    
    ran = random.randint(1,num)
    _body_deco = (deer.objects.get(pk = ran)).bodydeco
    
    
    mixDeer.objects.create(
            user_id = u_id,
            m_horn = _horn,
            m_hair = _hair,
            m_eye = _eye,
            m_body_color = _body_color,
            m_body_deco = _body_deco
        )
    
    mixDeers = mixDeer.objects.last()
    
    serializer = mixdeerSerializer(mixDeers,many = False)
    
    
    return Response(serializer.data) 

class present(APIView):
    def get(self, req):
        #req.jwt를 디코드 해서 user_id로 저장
        if(req.num == 1):
            
            if(Sock.objects.filter(u_id = req.user_id).exists() == False):
                Sock.objects.create (
                    u_id = req.user_id,
                    sock1_name = req.name,
                    sock1_img = req.img,
                    sock2_name = "null",
                    sock2_img = "null",
                    sock3_name = "null",
                    sock3_img = "null",
                    )      
                sock.save()       
            else: 
                sock = Sock.objects.get(u_id = req.user_id)
                sock.sock1_name = req.name
                sock.sock1_img = req.img
                sock.save()
            
        
        elif(req.num == 2):
            
            if(Sock.objects.filter(u_id = req.user_id).exists() == False):
                Sock.objects.create (
                    u_id = req.user_id,
                    sock1_name = "null",
                    sock1_img = "null",
                    sock2_name = req.name,
                    sock2_img = req.img,
                    sock3_name = "null",
                    sock3_img = "null",
                    )      
                sock.save()       
            else: 
                sock = Sock.objects.get(u_id = req.user_id)
                sock.sock2_name = req.name
                sock.sock2_img = req.img
                sock.save()
                
        elif(req.num == 3):
            if(Sock.objects.filter(u_id = req.user_id).exists() == False):
                Sock.objects.create (
                    u_id = req.user_id,
                    sock1_name = "null",
                    sock1_img = "null",
                    sock2_name = "null",
                    sock2_img = "null",
                    sock3_name = req.name,
                    sock3_img = req.img,
                    )      
                sock.save()       
            else: 
                sock = Sock.objects.get(u_id = req.user_id)
                sock.sock3_name = req.name
                sock.sock3_img = req.img
                sock.save()
    def post(self, req):
        #jwt를 디코드 해서 user_id로 저장
        sock = Sock.objects.get(pk = req.user_id)
        
        # datadict = {
        #         "name" : user.username,
        #         "exist" : True,
        #         "solve_count" : user.solve_count,
        #         "nickname" : user.nickname,

        #     }
        if(req.num == 1):
            datadict = {
                "name" : sock.sock1_name,
                "url" : sock.sock1_img,
                
            }
            return JsonResponse(datadict)
            
        elif(req.num == 2):
            datadict = {
                "name" : sock.sock2_name,
                "url" : sock.sock2_img,
                
            }
            return JsonResponse(datadict)
            
        elif(req.num == 3):
            datadict = {
                "name" : sock.sock3_name,
                "url" : sock.sock3_img,
                
            }
            return JsonResponse(datadict)
        

#         - register : post (or get) 했을때, 프론트에서는 param으로 jwt, img_url, 소원이름, 양말번호를 주면 → 백엔드에서는 해당 유저의 양말 객체에 저장시킨다. 반환필요 X
# - information :  post (or get) 했을때, 프론트에서는 param으로 jwt와 양말번호를 주면 → 백엔드에서는 해당 유저의 양말 url와 소원이름을 반환해준다.
    
    
        

class quizList(APIView):
    def get(self, request):
        quizzes = quiz.objects.all()
        serializer = quizSerializer(quizzes, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = quizSerializer(
            data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class deerList(APIView):    
    def get(self, request):
        deers = deer.objects.all()
        serializer = deerSerializer(deers, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = deerSerializer(
            data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['POST'])
def quizDetail(request, pk):
    
    
    serializer = user_ASerializer(data = request.data)
    if serializer.is_valid():
        serializer.save()   

    quizz = quiz.objects.get(pk = pk)
    user_answer = user_A.objects.last() # 유저의 가장 최근 대답
    
    print(user_answer.answer)
    print(quizz.answer)
    
    if (quizz.answer == user_answer.answer):
        print("맞았습니다.")
        sendWreath()
        return sendMixdeer()
    
    else:
        print("돌아가")

class deerDetail(APIView):
    def get_object(self, pk):
        try:
            return deer.objects.get(pk=pk)
        except deer.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        deer = self.get_object(pk)
        serializer = deerSerializer(deer)
        return Response(serializer.data)
    
    def put(self, request, pk, format=None):
        deer = self.get_object(pk)
        serializer = deerSerializer(deer, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        review = self.get_object(pk)
        review.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class RealWreathView(APIView):    
    def get(self, request):
        user_jwt = request.GET.get('jwt',None)
        user_id = jwt.decode(user_jwt,SECRET_KEY,algorithms=ALGORITHM)
        user_wreath = RealWreath.objects.get(user_id = user_id)
        
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
        ornament = request.data.get('ornament',None)
        user_id = jwt.decode(user_jwt,SECRET_KEY,algorithms=ALGORITHM)
        user = User.objects.get(u_id=user_id)
        
        if RealWreath.objects.filter(user_id=user_id['id']).exists():
                if index==1 : 
                    user_realwreath = RealWreath.objects.get(user_id = user['u_id'])
                    user_realwreath.orn1 = ornament
                    user_realwreath.save()
                if index==2 : 
                    user_realwreath = RealWreath.objects.get(user_id = user['u_id'])
                    user_realwreath.orn2 = ornament
                    user_realwreath.save()
                if index==3 : 
                    user_realwreath = RealWreath.objects.get(user_id = user['u_id'])
                    user_realwreath.orn3 = ornament
                    user_realwreath.save()
                if index==4 : 
                    user_realwreath = RealWreath.objects.get(user_id = user['u_id'])
                    user_realwreath.orn4 = ornament
                    user_realwreath.save()
                if index==5 : 
                    user_realwreath = RealWreath.objects.get(user_id = user['u_id'])
                    user_realwreath.orn5 = ornament
                    user_realwreath.save()
                if index==6 : 
                    user_realwreath = RealWreath.objects.get(user_id = user['u_id'])
                    user_realwreath.orn6 = ornament
                    user_realwreath.save()
                if index==7 : 
                    user_realwreath = RealWreath.objects.get(user_id = user['u_id'])
                    user_realwreath.orn7 = ornament
                    user_realwreath.save()

        else:
            RealWreath(
                user_id = user_id,

            ).save()
            if index==1 : 
                user_realwreath = RealWreath.objects.get(user_id = user['u_id'])
                user_realwreath.orn1 = ornament
                user_realwreath.save()
            if index==2 : 
                user_realwreath = RealWreath.objects.get(user_id = user['u_id'])
                user_realwreath.orn2 = ornament
                user_realwreath.save()
            if index==3 : 
                user_realwreath = RealWreath.objects.get(user_id = user['u_id'])
                user_realwreath.orn3 = ornament
                user_realwreath.save()
            if index==4 : 
                user_realwreath = RealWreath.objects.get(user_id = user['u_id'])
                user_realwreath.orn4 = ornament
                user_realwreath.save()
            if index==5 : 
                user_realwreath = RealWreath.objects.get(user_id = user['u_id'])
                user_realwreath.orn5 = ornament
                user_realwreath.save()
            if index==6 : 
                user_realwreath = RealWreath.objects.get(user_id = user['u_id'])
                user_realwreath.orn6 = ornament
                user_realwreath.save()
            if index==7 : 
                user_realwreath = RealWreath.objects.get(user_id = user['u_id'])
                user_realwreath.orn7 = ornament
                user_realwreath.save()

        return JsonResponse({"응답":"리스저장 완료"})

                


            