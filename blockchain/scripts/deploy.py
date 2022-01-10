from brownie  import Message
from scripts.helpful_scripts import get_account

def deploy():
      account = get_account()
      print("Deploying smart contract on testnet")
      message =  Message.deploy({"from":account},publish_source=True)
      print("Deployed!!")
      transcation = message.send_message('0xA2bbE509D55a7F5623fB8e820c5BC0B93dC57750','Hello',{"from":account})
      print("Message send")
      transcation.wait(1)
      respose_message = message.retrieve_message('0xA2bbE509D55a7F5623fB8e820c5BC0B93dC57750')
      print(f'reponse: {respose_message}')

def main():
      deploy()