export interface Package {
    errorCode: any
    errorText: any
    requestedTrackingNumber: string
    trackingNumber: string
    isMobileDevice: boolean
    packageStatus: string
    packageStatusType: string
    packageStatusCode: string
    progressBarType: string
    progressBarPercentage: string
    simplifiedText: string
    endOfDayResCMSKey: any
    receivedBy: string
    leaveAt: any
    nextExpectedEvent: any
    milestones: Milestone[]
    altTrkNumInfo: any
    alertCount: number
    isEligibleViewMoreAlerts: boolean
    cdiLeaveAt: any
    leftAtActionCMSKey: string
    leftAt: string
    showNoInfoDate: boolean
    showPickupByDate: boolean
    shipToAddress: ShipToAddress
    shipFromAddress: any
    consigneeAddress: any
    deliveryAddress: DeliveryAddress
    signatureImage: string
    trackHistoryDescription: any
    additionalInformation: AdditionalInformation
    specialInstructions: any
    proofOfDeliveryUrl: string
    upsAccessPoint: any
    additionalPackagesCount: any
    attentionNeeded: AttentionNeeded
    shipmentProgressActivities: ShipmentProgressActivity[]
    shipmentGMTInfo: ShipmentGmtinfo
    deliveryPhoto: any
    trackingNumberType: string
    preAuthorizedForReturnData: any
    shipToAddressLblKey: string
    isShipToAddressChangePending: boolean
    trackSummaryView: any
    senderShipperNumber: string
    internalKey: string
    userOptions: UserOptions
    sendUpdatesOptions: SendUpdatesOptions
    myChoiceUpSellLink: any
    bcdnNumber: any
    promo: Promo
    whatsNextText: any
    myChoiceToken: any
    showMycTerms: boolean
    enrollNum: string
    showConfirmWindow: boolean
    confirmWindowLbl: any
    confirmWindowLink: any
    followMyDelivery: any
    fileClaim: any
    viewClaim: any
    flightInformation: any
    voyageInformation: any
    viewDeliveryReceipt: any
    isInWatchList: boolean
    isHistoryUpdateRequire: boolean
    consumerHub: string
    campusShip: any
    asrInformation: AsrInformation
    isSuppressDetailTab: boolean
    isUpsPremierPackage: boolean
    isUPSDeliveryPartner: boolean
    lastSensorLocation: any
    lastSensorEnvInfo: any
    isPremierStyleEligible: boolean
    deliveryAttemptMsgDate: string
    isInFlight: boolean
    shipmentUpsellEligible: boolean
    ippaMessageInfo: any
    uploadDocumentsURL: string
    deliveredDayCMSKey: string
    deliveredDateDetail: DeliveredDateDetail
    scheduledDeliveryDayCMSKey: string
    scheduledDeliveryDateDetail: any
    packageStatusTime: string
    packageStatusTimeLbl: string
    isEDW: boolean
    disableSDDSection: boolean
    unauthDrugCmsKey: any
    hasBrokerageEvent: boolean
    isMyChoiceCountry: boolean
    isMyChoicePkg: boolean
    showText4ManifestSDD: boolean
    stSDDSuppressionReason: string
    showSignatureDeliveryOptionsMsg: boolean
  }
  
  export interface Milestone {
    isCurrent: boolean
    isCompleted: boolean
    isFuture: boolean
    isRFIDIcon: boolean
    category: any
    subMilestone: any
    returnTrackingNumber: any
    name: string
    nameKey: string
  }
  
  export interface ShipToAddress {
    streetAddress1: string
    streetAddress2: string
    streetAddress3: string
    city: string
    state: string
    province: string
    country: string
    zipCode: string
    companyName: string
    attentionName: string
    isAddressCorrected: boolean
    isReturnAddress: boolean
    isHoldAddress: boolean
  }
  
  export interface DeliveryAddress {
    country: string
    zipCode: any
  }
  
  export interface AdditionalInformation {
    serviceInformation: ServiceInformation
    weight: string
    weightUnit: string
    codInformation: any
    shippedOrBilledDate: string
    referenceNumbers: any
    postalServiceTrackingID: string
    alternateTrackingNumbers: any
    otherRequestedServices: any
    descriptionOfGood: string
    cargoReady: string
    fileNumber: string
    originPort: string
    destinationPort: string
    estimatedArrival: string
    estimatedDeparture: string
    poNumber: string
    blNumber: string
    appointmentMade: any
    appointmentRequested: any
    appointmentRequestedRange: any
    manifest: string
    isSmallPackage: boolean
    shipmentVolume: any
    numberOfPallets: any
    shipmentCategory: string
    pkgSequenceNum: any
    pkgIdentificationCode: any
    pkgID: any
    product: any
    numberOfPieces: any
    wwef: boolean
    wwePostal: boolean
    showAltTrkLink: boolean
    wweParcel: boolean
    deliveryPreference: any
    liftGateOnDelivery: any
    liftGateOnPickup: any
    pickupDropOffDate: any
    pickupPreference: any
  }
  
  export interface ServiceInformation {
    serviceName: string
    serviceLink: any
    serviceAttribute: any
  }
  
  export interface AttentionNeeded {
    actions: any[]
    isCorrectMyAddress: boolean
  }
  
  export interface ShipmentProgressActivity {
    date: string
    time: string
    location: string
    activityScan: string
    milestoneName?: MilestoneName
    isInOverViewTable: boolean
    activityAdditionalDescription: any
    trailer: string
    isDisplayPodLink: boolean
    isRFIDIconEvent: boolean
    actCode: string
    gmtDate: string
    gmtOffset: string
    gmtTime: string
    alternateTrackingNumbers: any
    isBrokerageEvent: boolean
  }
  
  export interface MilestoneName {
    name: string
    nameKey: string
  }
  
  export interface ShipmentGmtinfo {
    shipFromGMTOffset: string
    shipToGMTOffset: string
  }
  
  export interface UserOptions {
    deliveryOptions: any
  }
  
  export interface SendUpdatesOptions {
    bridgePageType: string
    myChoicePreferencesLink: string
    isSMSSupported: boolean
    isEligibleToRetrieveDelAlerts: boolean
    qvnNotificationsInfo: QvnNotificationsInfo
    text: any
    name: string
    url: any
  }
  
  export interface QvnNotificationsInfo {
    isDisplayCurrentStatus: boolean
    isDisplayUnforeseenEventsOrDelays: boolean
    isDisplayShipmentDelivered: boolean
    isDisplayPackageReadyForPickup: boolean
    isPreCheckedCurrentStatus: boolean
    isPreCheckedUnforeseenEventsOrDelays: boolean
    isPreCheckedShipmentDelivered: boolean
    isPreCheckedPackageReadyForPickup: boolean
    languageOptions: LanguageOption[]
    defaultSelectedLanguage: string
    email: any
    phoneNumber: any
  }
  
  export interface LanguageOption {
    locale: string
    language: string
  }
  
  export interface Promo {
    isPackagePromotion: boolean
    isShipperPromotion: boolean
    productImage: any
    title: any
    description: any
    shipperURL: any
    shipperLogoURL: any
  }
  
  export interface AsrInformation {
    allowDriverRelease: any
    processEDN: any
  }
  
  export interface DeliveredDateDetail {
    monthCMSKey: string
    dayNum: string
  }
  