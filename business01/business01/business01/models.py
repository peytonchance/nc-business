#path: business01/business01
from django.db import models

class Business(models.Model):
    name = models.CharField(max_length=50)
    ticker = models.CharField(max_length=50)
    market_cap = models.CharField(max_length=50)
    trailing_pe = models.CharField(max_length=50)
    forward_pe = models.CharField(max_length=50)
    revenue = models.CharField(max_length=50)
    ebitda = models.CharField(max_length=50)
    total_cash = models.CharField(max_length=50)
    total_debt = models.CharField(max_length=50)
    annual_dividend = models.CharField(max_length=50)
    payout_ratio = models.CharField(max_length=50)
    year_change = models.CharField(max_length=50)
    short_of_float = models.CharField(max_length=50)

    class Meta:
        ordering = ('ticker',)

    def __str__(self):
        return self.ticker
