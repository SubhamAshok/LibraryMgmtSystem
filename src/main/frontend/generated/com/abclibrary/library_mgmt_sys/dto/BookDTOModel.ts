import { _getPropertyModel as _getPropertyModel_1, makeObjectEmptyValueCreator as makeObjectEmptyValueCreator_1, NumberModel as NumberModel_1, ObjectModel as ObjectModel_1, StringModel as StringModel_1 } from "@vaadin/hilla-lit-form";
import type BookDTO_1 from "./BookDTO.js";
class BookDTOModel<T extends BookDTO_1 = BookDTO_1> extends ObjectModel_1<T> {
    static override createEmptyValue = makeObjectEmptyValueCreator_1(BookDTOModel);
    get bookId(): NumberModel_1 {
        return this[_getPropertyModel_1]("bookId", (parent, key) => new NumberModel_1(parent, key, true, { meta: { javaType: "java.lang.Long" } }));
    }
    get bookName(): StringModel_1 {
        return this[_getPropertyModel_1]("bookName", (parent, key) => new StringModel_1(parent, key, true, { meta: { javaType: "java.lang.String" } }));
    }
    get author(): StringModel_1 {
        return this[_getPropertyModel_1]("author", (parent, key) => new StringModel_1(parent, key, true, { meta: { javaType: "java.lang.String" } }));
    }
    get copiesAvailable(): NumberModel_1 {
        return this[_getPropertyModel_1]("copiesAvailable", (parent, key) => new NumberModel_1(parent, key, true, { meta: { javaType: "java.lang.Integer" } }));
    }
    get publishDate(): StringModel_1 {
        return this[_getPropertyModel_1]("publishDate", (parent, key) => new StringModel_1(parent, key, true, { meta: { javaType: "java.time.LocalDate" } }));
    }
    get edition(): StringModel_1 {
        return this[_getPropertyModel_1]("edition", (parent, key) => new StringModel_1(parent, key, true, { meta: { javaType: "java.lang.String" } }));
    }
    get pages(): NumberModel_1 {
        return this[_getPropertyModel_1]("pages", (parent, key) => new NumberModel_1(parent, key, true, { meta: { javaType: "java.lang.Integer" } }));
    }
}
export default BookDTOModel;
