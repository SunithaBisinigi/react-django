# Generated by Django 5.0 on 2023-12-21 05:13

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='YourUserModel',
            fields=[
                ('ID', models.IntegerField(primary_key=True, serialize=False)),
                ('FirstName', models.CharField(max_length=255)),
                ('LastName', models.CharField(max_length=255)),
                ('Prefix', models.CharField(max_length=10)),
                ('Position', models.CharField(max_length=255)),
                ('Picture', models.ImageField(upload_to='employee_pictures/')),
                ('BirthDate', models.DateField()),
                ('HireDate', models.DateField()),
                ('Notes', models.TextField()),
                ('Address', models.CharField(max_length=255)),
            ],
        ),
    ]
