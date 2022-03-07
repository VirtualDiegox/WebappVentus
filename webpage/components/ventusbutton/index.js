import Link from "next/link";
import { PlayIcon } from '@heroicons/react/solid'

export default function VentusButton(props) {
  return (
    <div className="py-3">
      <button className="grid grid-cols-4 bg-orange-400 items-center px-3">
        <PlayIcon className="px-2 text-black-500 "/>
        <p className="px-1 text-4xl text-black-500 font-black col-span-3">
            {props.title}
        </p>
        
      </button>
    </div>
  );
}
