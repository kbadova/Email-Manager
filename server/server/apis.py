from rest_framework import generics, serializers
from .models import Message


class MessagesList(generics.ListAPIView):
    class MessageSerializer(serializers.Serializer):
        send_to = serializers.EmailField()

    queryset = Message.objects.all()
    serializer_class = MessageSerializer
