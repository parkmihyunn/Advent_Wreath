from rest_framework import serializers

from accounts.models import User

<<<<<<< HEAD
from wall.serializers import mixdeerSerializer,user_ASerializer,wreathSerializer,sockSerializer
=======
from wall.serializers import mixdeerSerializer,user_ASerializer,wreathSerializer
>>>>>>> 484da55050583991e0adfa141bae607a9b085fea


class UserSerializer(serializers.ModelSerializer):
    user_deer = mixdeerSerializer(many = True, read_only = True)
    user_answer = user_ASerializer(many = True, read_only = True)
    user_wreath = wreathSerializer(many = True, read_only = True)
<<<<<<< HEAD
    user_sock = sockSerializer(many = True, read_noly = True)
=======
>>>>>>> 484da55050583991e0adfa141bae607a9b085fea
    
    class Meta:
        model = User
        fields = '__all__'