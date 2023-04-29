#!/bin/bash
## monitor system load every 1 minute, add it to file /var/log/system-load. The script must be run using root.
##Exit codes:
##	0 : Normal terminated
##	1: the user is not the root

# check if the user who run the script is the root
[ ${EUID} -ne 0 ] && exit 1

while true
do
    # Get the system load average for the last minute
    load=$(uptime)
	
    # Get the current date and time
    timestamp=$(date +"%Y-%m-%d %H:%M:%S")

    # Write the system load and timestamp to the log file
    echo "${timestamp} - ${load}" >> /var/log/system-load.log

    # to log it every 1 minute
    sleep 60
done

exit 0