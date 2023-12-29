# signals.py
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth import get_user_model

@receiver(post_save, sender=get_user_model())
def send_notification(sender, instance, **kwargs):
    if kwargs.get('update_fields') and 'approval' in kwargs['update_fields']:
        if instance.approval == 'a':
            # Handle approval notification
            print(f"User {instance.email}: Your request is approved.")
        elif instance.approval == 'r':
            # Handle rejection notification
            print(f"User {instance.email}: Your request is rejected.")
