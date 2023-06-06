Population = 2
PopGrowth = 1.005
Days = 0
Farmers = 0
Food = 0


while Population <= 1000000:
  Days += 1
  If Days == 56:
    Food = Farmers * 10
    If Population < Food:
      Food = Food - Population
      Population *= PopGrowth
    Else:
      Population = Food
      Food = 0
    Days = 0
    
