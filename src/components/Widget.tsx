import { ChatTeardropDots } from "phosphor-react";
import { useState } from "react";
import { Popover } from "@headlessui/react";

export function Widget() {
    const [isWidgetOpen, setIsWidgetOpen] = useState(false)

    function toggleWidgetVisibility(){
        setIsWidgetOpen(!isWidgetOpen)
    }


    return (
    <Popover className="absolute bottom-4 right-4">

         <Popover.Panel>Hello Word</Popover.Panel> 
        
        <Popover.Button className=" bg-violet-500  rounded-full px-3 h-12 text-white flex items-center group">
            <ChatTeardropDots size={50} className="w-6 h-6"/>

            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-700">
                <span className="pl-2"></span>
                Feedback</span>
        </Popover.Button>
    </Popover>
    
    )
}