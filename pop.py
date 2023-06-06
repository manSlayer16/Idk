Population = 2
PopGrowth = 1.005
Days = 0
while Population <= 1000000:
  Days += 1
  If Days == 56:
    Population *= PopGrowth
    Days = 0
