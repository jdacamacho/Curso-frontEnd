/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package prueba;

import java.util.Scanner;

public class Prueba {

    public static void main(String args[]){
        //Declaro el objeto Scanner
        Scanner console = new Scanner(System.in);
        
        //Declaro las variables a utilizar
        String title;
        String author;
        String output;
        
        //Solicito el titulo al usuario
        System.out.println("Ingrese el titulo del libro:");
        title = console.nextLine();
        
        //Solicito el autor al usuario
        System.out.println("Ingrese el autor:");
        author = console.nextLine();
        
        //Concateno los datos leidos por consola
        output = title + " fue escrito por:" + author;
        
        //muestro el resultado
        System.out.println(output);
        
    }
}
