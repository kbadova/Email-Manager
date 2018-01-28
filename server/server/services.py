import requests
import json
from rest_framework import serializers

from .models import Student, Message, StudentInMessage

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ('id', 'email', 'name')


class TeacherSerizelizer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ('id', 'email')


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ('id', 'subject', 'content', 'sent_at', 'completed', 'students', 'send_from')

    send_from = TeacherSerizelizer()
    students = serializers.SerializerMethodField()

    def get_students(self, obj):
        students = []
        student_messages = obj.student_messages.all()
        for student_course in student_messages:
            students.append(student_course.student)

        return StudentSerializer(students, many=True).data


def call_python_service(new_message):
    serializer = MessageSerializer(new_message)
    headers = {'Content-Type': 'Application/Json'}

    response = requests.post('http://localhost:5000/send-message/', data=json.dumps(serializer.data), headers=headers)
    if response.status_code == 202:
        new_message.completed = True
    else:
        new_message.completed = False
    new_message.save()
    return new_message

def create_message_service(subject, content, send_from, students):
    new_message = Message.objects.create(subject=subject,
                                         content=content,
                                         send_from=send_from)
    for student in students:
        StudentInMessage.objects.create(student=student, message=new_message)

    new_message = call_python_service(new_message)

    return new_message
