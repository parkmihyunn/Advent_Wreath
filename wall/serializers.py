from rest_framework import serializers
from wall.models import quiz,deer,mixDeer,user_A,wreath,Sock


class quizSerializer(serializers.ModelSerializer):
    class Meta:
        model = quiz
        fields = ('question','answer')

class deerSerializer(serializers.ModelSerializer):
    class Meta:
        model = deer
        fields = ('horn','headdeco','eye','body','bodydeco')
        
class user_ASerializer(serializers.ModelSerializer):
    class Meta:
        model = user_A
        fields = ('user_id','answer',)
        
class mixdeerSerializer(serializers.ModelSerializer):
    class Meta:
        model = mixDeer
        fields = ('user_id','m_horn','m_hair','m_eye','m_body_color','m_body_deco')

        
class wreathSerializer(serializers.ModelSerializer):
    class Meta:
        model = wreath
        field = ('user_id','src','width')
        
class sockSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sock
        field = ('u_id','sock1_name','sock1_img','sock2_name','sock2_img','sock3_name','sock3_img')
        
        

