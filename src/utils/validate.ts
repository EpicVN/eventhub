export class Validate {
    static Email(mail: string) {
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) {
            return true;
        }

        return false;
    }

    static Password = (val: string) => {
        return val.length >= 8
    }
}
