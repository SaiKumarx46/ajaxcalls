using MyService as service from '../../srv/service';
annotate service.item with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'item_name',
                Value : item_name,
            },
            {
                $Type : 'UI.DataField',
                Label : 'item_desc',
                Value : item_desc,
            },
            {
                $Type : 'UI.DataField',
                Label : 'quantity',
                Value : quantity,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Value : id,
            Label : 'id',
        },
        {
            $Type : 'UI.DataField',
            Label : 'item_name',
            Value : item_name,
        },
        {
            $Type : 'UI.DataField',
            Label : 'item_desc',
            Value : item_desc,
        },
        {
            $Type : 'UI.DataField',
            Label : 'quantity',
            Value : quantity,
        },
    ],
);

