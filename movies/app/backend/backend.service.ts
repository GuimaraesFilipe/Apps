import { Injectable } from "@angular/core";
import { getString, setString } from "application-settings";

export class BackendService {
static isLoggedIn(): boolean {
        return !!getString("token");
    }
static get token(): string {
        return getString("token");
    }
static set token(theToken: string) {
        setString("token", theToken);
    }

static get token2(): string {
        return getString("token");
    }
static set token2(theToken: string) {
        setString("token", theToken);
    }
}