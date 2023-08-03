import { Car } from "./Car";

export interface CarInfoProps {
    isOpen: boolean;
    closeModal: () => void;
    data: Car;
}
