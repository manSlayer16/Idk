att_btn = document.getElementById("attack_btn")
EnemyHealth = document.getElementById("EnemyHealth")
PlayerHpText = document.getElementById("player_health")


EHealth = 100
EDefence = 5
EAttack = 5

PlayerAttack = 10
PlayerHealth = 100
PlayerDefence = 10



function EnemyAttack() {
  PlayerHealth -= EAttack
  PlayerHpText -= PlayerHealth
}

function PlayerAttack() {
  EHealth = EnemyHealth - Attack
  playerHealth.InnerText = EnemyHeath
}
