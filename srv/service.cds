using db as s1 from '../db/schema';

service MyService {

    @odata.draft.enabled
    @odata.bypass.enabled
    entity item as projection on s1.item;

}
