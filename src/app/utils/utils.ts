import { Component, ComponentFactoryResolver, Injectable, Type, ViewContainerRef } from '@angular/core';

export interface ComponentType<T = any> {
  new (...args: any[]): T;
}

@Injectable()
export class Utils  {


  public static moveToTheLeft(id : string, value : string)
  {
    let dialogText = document.getElementById(id);
    if(dialogText) dialogText.style.left = value;
  }

  public static createComponent<T>(componentFactoryResolver : ComponentFactoryResolver, container: ViewContainerRef, component : ComponentType)
  {
    const dynamicComponentFactory = componentFactoryResolver.resolveComponentFactory(component);  
    return container.createComponent(dynamicComponentFactory);  
  }


}
