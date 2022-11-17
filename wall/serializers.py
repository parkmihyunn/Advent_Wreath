from rest_framework import serializers
from wall.models import quiz

class quizSerializer(serializers.ModelSerializer):
    class Meta:
        model = quiz
        fields = ('question','answer')
