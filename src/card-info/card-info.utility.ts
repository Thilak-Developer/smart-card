export class CardInfoUtility {

    constructor() {}

    getCardInfoAggregate() {
        return [
            {
                $lookup: {
                    from: "UserProfiles",
                    localField: "cardOwnerRefId",
                    foreignField: "_id",
                    as: "cardOwnerData",
                },
            },
            {
                $unwind: {
                    path: "$cardOwnerData",
                },
            },
            {
                $lookup: {
                    from: "MetaDatum",
                    localField: "cardMetaDataId",
                    foreignField: "_id",
                    as: "cardMetaData",
                },
            },
            {
                $unwind: {
                    path: "$cardMetaData",
                },
            },
            {
                $lookup: {
                    from: "MetaVehicleDatum",
                    localField: "cardMetaData.metaDataRefId",
                    foreignField: "metaDataId",
                    as: "cardMetaData.metaVehicleData",
                },
            },
            {
                $unwind: {
                    path: "$cardMetaData.metaVehicleData",
                },
            },
            {
                $lookup: {
                    from: "MetaRestaurantDatum",
                    localField: "cardMetaData.metaDataRefId",
                    foreignField: "metaDataId",
                    as: "cardMetaData.metaRestaurantData",
                },
            },
            {
                $unwind: {
                    path: "$cardMetaData.metaRestaurantData",
                },
            },
            {
                $lookup: {
                    from: "MetaOwnerContactDatum",
                    localField: "cardMetaData.metaDataRefId",
                    foreignField: "metaDataId",
                    as: "cardMetaData.metaOwnerContactData",
                },
            },
            {
                $unwind: {
                    path: "$cardMetaData.metaOwnerContactData",
                },
            },
        ]
    }
}