/*
 * Group member:
 *            CYIFUZO Jean Damascene      218002913
 *            NTAWUYIRUSHINTEGE Patrick   218012682
 * 
 * File:   source.c
 * Author: Teacher
 *
 * Created on July 29, 2021, 10:15 pm
 */
    
    
    STATUS equ 03h
RP0 equ 05
RP1 equ 06

PORTB equ 06h
TRISB equ 86h

COUNTER equ 20h

org 00h

    clrw
     ;SELECT BANK
    BCF STATUS, RP0
    BCF STATUS, RP1
 
    CLRF PORTB ;INITIALIZE PORTB

    BSF STATUS, RP0
    MOVLW 0x00 
    MOVWF TRISB

    BCF STATUS, RP0;

START	MOVLW 0x02
    MOVWF PORTB
    MOVLW 0xff
    MOVWF COUNTER

LOOP1 DECFSZ COUNTER
    GOTO LOOP1

    CLRF PORTB
    MOVLW 0x04
    MOVWF PORTB
      
    MOVLW 0xff
    MOVWF COUNTER
LOOP2 DECFSZ COUNTER
    GOTO LOOP2

    CLRF PORTB
    MOVLW 0x08
    MOVWF PORTB
    
    MOVLW 0xff
    MOVWF COUNTER
LOOP3 DECFSZ COUNTER
    GOTO LOOP3
      
    GOTO START
END