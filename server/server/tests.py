from test_plus import TestCase

from django.urls import reverse

from rest_framework.test import APIClient
from .models import Teacher, Student


class TestCreateContractAPI(TestCase):
    def setUp(self):
        self.url = reverse('create-message')
        self.api_client = APIClient()

        super().setUp()

    def test_create_new_message(self):
        teacher = Teacher.objects.create(email="mechence@gmail.com", name="Ivo", password="1234")
        student = Student.objects.create(email="kuche@gmail.com", name="Kuche")
        student2 = Student.objects.create(email="kuche2@gmail.com", name="Kuche2")

        post_data = {
            'subject': 'Exam',
            'content': 'lorem',
            'send_from': teacher.id,
            'receivers': [student.id, student2.id]
        }

        response = self.api_client.post(self.url, post_data, format='json')        
        self.response_201(response)
