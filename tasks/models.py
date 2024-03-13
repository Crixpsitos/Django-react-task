from django.db import models

class Task(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    done = models.BooleanField(default=False)
    date = models.DateTimeField(auto_now=True)  

    class Meta:
        ordering = ["-date"] 

    def __str__(self):
        return self.title 

