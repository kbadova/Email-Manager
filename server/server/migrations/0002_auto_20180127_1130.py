# Generated by Django 2.0.1 on 2018-01-27 11:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('server', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='message',
            name='send_from',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='teachers_from', to='server.Teacher'),
        ),
        migrations.AlterField(
            model_name='message',
            name='send_to',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='students_to', to='server.Student'),
        ),
    ]