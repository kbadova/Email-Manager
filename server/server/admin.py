from django.contrib import admin

from .models import (
    Course, Teacher, Student, StudentInCourse, TeacherInCourse, Message
)


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ('name',)


@admin.register(Teacher)
class TeacherAdmin(admin.ModelAdmin):
    list_display = ('email', 'name')


@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = ('email', 'name')


@admin.register(StudentInCourse)
class StudentInCourseAdmin(admin.ModelAdmin):
    list_display = ('course', 'student')


@admin.register(TeacherInCourse)
class TeacherInCourseAdmin(admin.ModelAdmin):
    list_display = ('course', 'teacher')


@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    list_display = ('send_from', 'subject', 'content', 'sent_at', 'completed')
