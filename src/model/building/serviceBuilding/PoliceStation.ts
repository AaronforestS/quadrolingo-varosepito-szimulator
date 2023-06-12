import {ServiceBuilding} from "./ServiceBuilding";
import {Resident} from "../../resident/Resident";
import {handleRemove, workerReaction} from "./ServiceBuildingReactions";
import {genericFromJSON, genericToJSON} from "../../../persistence/persistenceHelper";

/**
 * Rendőrség kiszolgáló épület
 */
export class PoliceStation extends ServiceBuilding {
    public workers: Resident[] = []

    constructor() {
        super(1, 400, 0, 0.3, 0, require("../../../images/ServiceBuilding/policestation.png"));
    }

    /**
     * Lakókkal való interakció lekezelése
     * @param {Resident[]} residents
     */
    react(...residents: Resident[]): void {
       workerReaction(this, residents);
    }

    /**
     * Törli az elemet a játéktérről
     */
    remove(): void {
        handleRemove(this);
    }

    /**
     * JSON string-et csinál az objektumból
     * @returns {string}
     */
    toJSON(): string {
        return genericToJSON(this, 'PoliceStation');
    }

    /**
     * JSON string-et Rendőrséggé alakít
     * @param {string} s
     */
    fromJSON(s: string): void {
        genericFromJSON(s, this);
    }
}