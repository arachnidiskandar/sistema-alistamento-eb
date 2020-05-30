//BASIC TYPES DEFINED IN @angular/forms + rxjs/Observable
// tslint:disable: ban-types
type FormGroup = import('@angular/forms').FormGroup;
type FormArray = import('@angular/forms').FormArray;
type FormControl = import('@angular/forms').FormControl;
type AbstractControl = import('@angular/forms').AbstractControl;
type Observable<T> = import('rxjs').Observable<T>;

type STATUS = 'VALID' | 'INVALID' | 'PENDING' | 'DISABLED'; //<- I don't know why Angular Team doesn't define it https://github.com/angular/angular/blob/7.2.7/packages/forms/src/model.ts#L15-L45)
type STATUSs = STATUS | string; //<- string is added only becouse Angular base class use string insted of union type https://github.com/angular/angular/blob/7.2.7/packages/forms/src/model.ts#L196)

//OVVERRIDE TYPES WITH STRICT TYPED INTERFACES + SOME TYPE TRICKS TO COMPOSE INTERFACE (https://github.com/Microsoft/TypeScript/issues/16936)
interface TypedAbstractControl<T> extends AbstractControl {
    // BASE PROPS AND METHODS COMMON TO ALL FormControl/FormGroup/FormArray
    readonly value: T;
    valueChanges: Observable<T>;
    readonly status: STATUSs;
    statusChanges: Observable<STATUS>;
    get<V = unknown>(
        path: Array<string | number> | string
    ): TypedAbstractControl<V> | null;
    setValue<V>(
        value: V extends T ? V : never,
        options?: { onlySelf?: boolean; emitEvent?: boolean }
    ): void;
    patchValue<V>(
        value: V extends Partial<T> ? V : never,
        options?: { onlySelf?: boolean; emitEvent?: boolean }
    ): void;
    reset<V>(
        value?: V extends Partial<T> ? V : never,
        options?: { onlySelf?: boolean; emitEvent?: boolean }
    ): void;
}

interface TypedFormControl<T> extends FormControl {
    // COPIED FROM TypedAbstractControl<T> BECOUSE TS NOT SUPPORT MULPILE extends FormControl, TypedAbstractControl<T>
    readonly value: T;
    valueChanges: Observable<T>;
    readonly status: STATUSs;
    statusChanges: Observable<STATUS>;
    get<V = unknown>(
        path: Array<string | number> | string
    ): TypedAbstractControl<V> | null;
    setValue<V>(
        value: V extends T ? V : never,
        options?: { onlySelf?: boolean; emitEvent?: boolean }
    ): void;
    patchValue<V>(
        value: V extends Partial<T> ? V : never,
        options?: { onlySelf?: boolean; emitEvent?: boolean }
    ): void;
    reset<V>(
        value?: V extends Partial<T> ? V : never,
        options?: { onlySelf?: boolean; emitEvent?: boolean }
    ): void;
}
interface TypedFormGroup<T> extends FormGroup {
    // PROPS AND METHODS SPECIFIC OF FormGroup
    //controls: { [P in keyof T | string]: TypedAbstractControl<P extends keyof T ? T[P] : any> };
    controls: { [P in keyof T]: TypedAbstractControl<T[P]> };
    registerControl<P extends keyof T>(
        name: P,
        control: TypedAbstractControl<T[P]>
    ): TypedAbstractControl<T[P]>;
    registerControl<V = any>(
        name: string,
        control: TypedAbstractControl<V>
    ): TypedAbstractControl<V>;
    addControl<P extends keyof T>(
        name: P,
        control: TypedAbstractControl<T[P]>
    ): void;
    addControl<V = any>(name: string, control: TypedAbstractControl<V>): void;
    removeControl(name: keyof T): void;
    removeControl(name: string): void;
    setControl<P extends keyof T>(
        name: P,
        control: TypedAbstractControl<T[P]>
    ): void;
    setControl<V = any>(name: string, control: TypedAbstractControl<V>): void;
    contains(name: keyof T): boolean;
    contains(name: string): boolean;
    get<P extends keyof T>(path: P): TypedAbstractControl<T[P]>;
    getRawValue(): T & { [disabledProp in string | number]: any };
    // COPIED FROM TypedAbstractControl<T> BECOUSE TS NOT SUPPORT MULPILE extends FormGroup, TypedAbstractControl<T>
    readonly value: T;
    valueChanges: Observable<T>;
    readonly status: STATUSs;
    statusChanges: Observable<STATUS>;
    get<V = unknown>(
        path: Array<string | number> | string
    ): TypedAbstractControl<V> | null;
    setValue<V>(
        value: V extends T ? V : never,
        options?: { onlySelf?: boolean; emitEvent?: boolean }
    ): void;
    patchValue<V>(
        value: V extends Partial<T> ? V : never,
        options?: { onlySelf?: boolean; emitEvent?: boolean }
    ): void;
    reset<V>(
        value?: V extends Partial<T> ? V : never,
        options?: { onlySelf?: boolean; emitEvent?: boolean }
    ): void;
}

interface TypedFormArray<T> extends FormArray {
    // PROPS AND METHODS SPECIFIC OF FormGroup
    controls: TypedAbstractControl<T>[];
    at(index: number): TypedAbstractControl<T>;
    push<V = T>(ctrl: TypedAbstractControl<V>): void;
    insert<V = T>(index: number, control: TypedAbstractControl<V>): void;
    setControl<V = T>(index: number, control: TypedAbstractControl<V>): void;
    getRawValue(): T[];
    // COPIED FROM TypedAbstractControl<T[]> BECOUSE TS NOT SUPPORT MULPILE extends FormArray, AbastractControlTyped<T[]>
    readonly value: T[];
    valueChanges: Observable<T[]>;
    readonly status: STATUSs;
    statusChanges: Observable<STATUS>;
    get<V = unknown>(
        path: Array<string | number> | string
    ): TypedAbstractControl<V> | null;
    setValue<V>(
        value: V extends T[] ? V : never,
        options?: { onlySelf?: boolean; emitEvent?: boolean }
    ): void;
    patchValue<V>(
        value: V extends Partial<T>[] ? V : never,
        options?: { onlySelf?: boolean; emitEvent?: boolean }
    ): void;
    reset<V>(
        value?: V extends Partial<T>[] ? V : never,
        options?: { onlySelf?: boolean; emitEvent?: boolean }
    ): void;
}
