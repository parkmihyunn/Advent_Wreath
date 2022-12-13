from rest_framework import serializers
from wall.models import deer,mixDeer


class deerSerializer(serializers.ModelSerializer):
    class Meta:
        model = deer
        fields = ('horn','hair','eye','body_color','body_deco')
        
        
class mixdeerSerializer(serializers.ModelSerializer):
    class Meta:
        model = mixDeer
        fields = ('user_id','m_horn','m_hair','m_eye','m_body_color','m_body_deco')

        

        
        

