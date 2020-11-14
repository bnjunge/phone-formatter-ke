module.exports = function FormatNumbers(phone) {
    // remove anything not a digit
    let phone_ = phone.replace(/\D/g, '')
    phone_ = phone_.toString()
    // check length
    const length = phone_.length

    // get prefix
    var _phone = ''
    // length 12, check if its 254
    if (length == 12 && phone_.substring(0, 3) == '254') {
        _phone = phone_
    } else if (length == 9 && phone_.substring(0, 1) == 7) {
        _phone = '254' + phone_
    } else if (length == 10 && phone_.substring(0, 1) == 0) {
        _phone = '254' + phone_.substring(1, 10)
    } else {
        _phone = 'Invalid Phone Number ' + phone
    }

    return _phone
}

function ISPProvider() {
    return {
        Safaricom: [
            '254101',
            '254111',
            '254700',
            '254701',
            '254702',
            '254703',
            '254704',
            '254705',
            '254706',
            '254707',
            '254708',
            '254709',
            '254710',
            '254711',
            '254712',
            '254713',
            '254714',
            '254715',
            '254716',
            '254717',
            '254718',
            '254719',
            '254720',
            '254721',
            '254722',
            '254723',
            '254724',
            '254725',
            '254726',
            '254727',
            '254728',
            '254729',
            '254790',
            '254791',
            '254792',
            '254793',
            '254797',
            '254798',
            '254799',
            '254740',
            '254741',
            '254742',
            '254743',
            '254745',
            '254746',
            '254748',
            '254757',
            '254759',
            '254768',
            '254769'
        ],
        Airtel: [
            '254731',
            '254732',
            '254733',
            '254734',
            '254735',
            '254736',
            '254737',
            '254738',
            '254739',
            '254750',
            '254751',
            '254752',
            '254753',
            '254754',
            '254755',
            '254756',
            '254780',
            '254781',
            '254785',
            '254786',
            '254787',
            '254788',
            '254789'
        ],
        Telkom: [
            '254770',
            '254771',
            '254772',
            '254773',
            '254774',
            '254775',
            '254776'
        ],
        Faiba4g: [
            '254747'
        ],
        Equitel: [
            '254763',
            '254764',
            '254765'
        ]
    }
}

function checkOperator(phone) {
    const prefix_ke = (phone.toString()).substring(0, 6)
    const prefix = (phone.toString()).substring(0, 3)

    if (prefix !== '254') {
        return 'Invalid Operator'
    } else {
        const { Safaricom, Airtel, Telkom, Faiba4g, Equitel } = ISPProvider()

        return Safaricom.indexOf(prefix_ke) >= 0 ? 'Safaricom' :
            (Airtel.indexOf(prefix_ke) >= 0 ? 'Airtel' :
                (Telkom.indexOf(prefix_ke) >= 0 ? 'Telkom' :
                    (Faiba4g.indexOf(prefix_ke) >= 0 ? 'Faiba4g' :
                        (Equitel.indexOf(prefix_ke) >= 0 ? 'Equitel' :
                            'Invalid Operator'))))
    }
}


module.exports = {
    FormatNumbers: FormatNumbers,
    checkOperator: checkOperator
}