

export const formatDate = ( releaseDate: string ) => {
    const dateTrim = releaseDate.slice(0, 10)
    const newFormatDate =  new Date(dateTrim).toLocaleDateString('en', { day:"numeric", year:"numeric", month:"short"});

    return newFormatDate;
}