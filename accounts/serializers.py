from rest_framework import serializers

from accounts.models import User

from wall.serializers import mixdeerSerializer,user_ASerializer,wreathSerializer


class UserSerializer(serializers.ModelSerializer):
    user_deer = mixdeerSerializer(many = True, read_only = True)
    user_answer = user_ASerializer(many = True, read_only = True)
    user_wreath = wreathSerializer(many = True, read_only = True)
    
    class Meta:
        model = User
        fields = ['id', 'email', 'first_name', 'last_name', 'spouse_name', 'date_of_birth']