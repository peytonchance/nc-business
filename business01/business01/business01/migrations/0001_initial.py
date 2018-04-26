# Generated by Django 2.0 on 2018-04-26 02:13

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Business',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('ticker', models.CharField(max_length=50)),
                ('market_cap', models.CharField(max_length=50)),
                ('trailing_pe', models.CharField(max_length=50)),
                ('forward_pe', models.CharField(max_length=50)),
                ('revenue', models.CharField(max_length=50)),
                ('ebitda', models.CharField(max_length=50)),
                ('total_cash', models.CharField(max_length=50)),
                ('total_debt', models.CharField(max_length=50)),
                ('annual_dividend', models.CharField(max_length=50)),
                ('payout_ratio', models.CharField(max_length=50)),
                ('year_change', models.CharField(max_length=50)),
                ('short_of_float', models.CharField(max_length=50)),
            ],
            options={
                'ordering': ('ticker',),
            },
        ),
    ]