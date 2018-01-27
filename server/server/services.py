import requests
from rest_framework import serializers

from .models import Student, Message, StudentInMessage

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ('id', 'email', 'name')


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ('id', 'subject', 'content', 'sent_at', 'completed', 'students')

    students = serializers.SerializerMethodField()

    def get_students(self, obj):
        students = []
        student_messages = obj.student_messages.all()
        for student_course in student_messages:
            students.append(student_course.student)

        return StudentSerializer(students, many=True).data


def call_python_service(new_message):
    serializer = MessageSerializer(new_message)
    headers = {'content-type': 'application/json'}
    requests.post('http://localhost:5000/send-message/', data=serializer.data, headers=headers)


def create_message_service(subject, content, send_from, students):
    new_message = Message.objects.create(subject=subject,
                                         content=content,
                                         send_from=send_from)
    for student in students:
        StudentInMessage.objects.create(student=student, message=new_message)

    # call_python_service(new_message)

    return new_message
