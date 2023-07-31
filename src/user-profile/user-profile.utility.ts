export class UserProfileUtility {

    getUserProfileAggregate() {
        return [
            {
                $lookup: {
                    from: "CardInfos",
                    localField: "_id",
                    foreignField: "cardOwnerRefId",
                    as: "cardDetails",
                },
            },
            {
                $unwind: {
                    path: "$cardDetails",
                },
            },
            {
                $lookup: {
                    from: "MetaDatum",
                    localField: "cardDetails.cardMetaDataId",
                    foreignField: "_id",
                    as: "cardDetails.cardMetaData",
                },
            },
            {
                $unwind: {
                    path: "$cardDetails.cardMetaData",
                },
            },
            {
                $lookup: {
                    from: "MetaVehicleDatum",
                    localField: "cardDetails.cardMetaData.metaDataRefId",
                    foreignField: "metaDataId",
                    as: "cardDetails.cardMetaData.metaVehicleData",
                },
            },
            {
                $unwind: {
                    path: "$cardDetails.cardMetaData.metaVehicleData",
                },
            },
            {
                $lookup: {
                    from: "MetaRestaurantDatum",
                    localField: "cardDetails.cardMetaData.metaDataRefId",
                    foreignField: "metaDataId",
                    as: "cardDetails.cardMetaData.metaRestaurantData",
                },
            },
            {
                $unwind: {
                    path: "$cardDetails.cardMetaData.metaRestaurantData",
                },
            },
            {
                $lookup: {
                    from: "MetaOwnerContactDatum",
                    localField: "cardDetails.cardMetaData.metaDataRefId",
                    foreignField: "metaDataId",
                    as: "cardDetails.cardMetaData.metaOwnerContactData",
                },
            },
            {
                $unwind: {
                    path: "$cardDetails.cardMetaData.metaOwnerContactData",
                },
            },
        ]
    }
}