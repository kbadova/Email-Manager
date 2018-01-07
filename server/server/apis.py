from rest_framework import status
from rest_framework.views import APIView
from rest_framework import generics, serializers
from rest_framework.response import Response

from .models import Message, Teacher


class MessagesList(generics.ListAPIView):
    class MessageSerializer(serializers.Serializer):
        send_to = serializers.EmailField()

    serializer_class = MessageSerializer

    def get_queryset(self):

        return Message.objects.all()


class LoginApi(APIView):
    class LoginSerializer(serializers.Serializer):
        email = serializers.EmailField()
        password = serializers.CharField()

    def post(self, request, *args, **kwargs):
        serializer = self.LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        validated_data = serializer.validated_data

        email = validated_data.get('email')
        password = validated_data.get('password')

        user = generics.get_object_or_404(Teacher, email=email, password=password)
        request.user = user

        return Response(status=status.HTTP_200_OK)
