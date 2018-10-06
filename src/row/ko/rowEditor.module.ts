/**
 * @license
 * Copyright Paperbits. All Rights Reserved.
 *
 * Use of this source code is governed by a Commercial license that can be found in the LICENSE file and at https://paperbits.io/license.
 */

import { IInjectorModule, IInjector } from "@paperbits/common/injection";
import { IWidgetHandler } from "@paperbits/common/editing";
import { RowLayoutSelector } from "./rowLayoutSelector";
import { RowHandlers } from "../rowHandlers";

export class RowEditorModule implements IInjectorModule {
    public register(injector: IInjector): void {
        injector.bind("emailRowLayoutSelector", RowLayoutSelector);
        injector.bind("emailRowHandler", RowHandlers);

        const widgetHandlers: IWidgetHandler[] = injector.resolve("widgetHandlers");
        widgetHandlers.push(injector.resolve<RowHandlers>("emailRowHandler"));
    }
}
