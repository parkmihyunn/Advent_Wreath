from rest_framework import serializers
from wall.models import quiz,deer,mixDeer,user_A,wreath

class quizSerializer(serializers.ModelSerializer):
    class Meta:
        model = quiz
        fields = ('question','answer')

class deerSerializer(serializers.ModelSerializer):
    class Meta:
        model = deer
        fields = ('horn','hair','eye','body_color','body_deco')
        
class user_ASerializer(serializers.ModelSerializer):
    class Meta:
        model = user_A
        fields = ('answer',)
    
class mixdeerSerializer(serializers.ModelSerializer):
    class Meta:
        model = mixDeer
        fields = ('m_horn','m_hair','m_eye','m_body_color','m_body_deco')

        
class wreathSerializer(serializers.ModelSerializer):
    class Meta:
        model = wreath
        field = ('src','width')
        
        
