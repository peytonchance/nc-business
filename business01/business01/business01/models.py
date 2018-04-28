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
    glassdoor_rating = models.CharField(max_length=50)

    class Meta:
        ordering = ('ticker',)

    def __str__(self):
        return self.ticker

    def to_json(self):
        return {
        "name": self.name,
        "ticker": self.ticker,
        "market_cap": self.market_cap,
        "trailing_pe": self.trailing_pe,
        "forward_pe": self.forward_pe,
        "revenue": self.revenue,
        "ebitda": self.ebitda,
        "total_cash": self.total_cash,
        "total_debt": self.total_debt,
        "annual_dividend": self.annual_dividend,
        "payout_ratio": self.payout_ratio,
        "year_change": self.year_change,
        "short_of_float": self.short_of_float,
        "glassdoor_rating": self.glassdoor_rating,
        }
