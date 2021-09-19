import { ComponentFactoryResolver, Injectable, Type, ViewContainerRef } from '@angular/core';
@Injectable()
export class Utils  {


  public static moveToTheLeft(id : string, value : string)
  {
    let dialogText = document.getElementById(id);
    if(dialogText) dialogText.style.left = value;
  }

  public static createComponent<T>(componentFactoryResolver : ComponentFactoryResolver, container: ViewContainerRef, component : Type<T>)
  {
    const dynamicComponentFactory = componentFactoryResolver.resolveComponentFactory(component);  
    return container.createComponent(dynamicComponentFactory);  
  }

  public static generateRandom(min : number, max : number)
  {
    return Math.floor(Math.random() * (max - min)) + min;
  }


}
