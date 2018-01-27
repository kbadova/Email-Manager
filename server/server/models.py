from django.db import models


class Student(models.Model):
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=255)


class Teacher(models.Model):
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=255)
    password = models.CharField(max_length=255)


class Course(models.Model):
    name = models.CharField(max_length=255)


class StudentInCourse(models.Model):
    student = models.ForeignKey(Student, related_name='students', on_delete=models.CASCADE)
    course = models.ForeignKey(Course, related_name='student_courses', on_delete=models.CASCADE)


class TeacherInCourse(models.Model):
    teacher = models.ForeignKey(Teacher, related_name='teachers', on_delete=models.CASCADE)
    course = models.ForeignKey(Course, related_name='teacher_courses', on_delete=models.CASCADE)


class Message(models.Model):
    send_from = models.ForeignKey(Teacher, on_delete=models.CASCADE, related_name='teachers_from')
    subject = models.CharField(max_length=255)
    content = models.TextField()
    sent_at = models.DateTimeField(blank=True, null=True)
    completed = models.BooleanField(default=False)


class StudentInMessage(models.Model):
    student = models.ForeignKey(Student, related_name='mstudents', on_delete=models.CASCADE)
    message = models.ForeignKey(Message, related_name='student_messages', on_delete=models.CASCADE)
