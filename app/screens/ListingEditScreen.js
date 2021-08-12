import React, { useState } from 'react';
import * as Yup from 'yup';
import { StyleSheet } from 'react-native';

import { AppForm, AppFormField, AppFormPicker, SubmitButton } from '../components/forms';
import Screen from '../components/Screen';
import CategoryPickerItem from '../components/CategoryPickerItem';
import FormImagePicker from '../components/forms/FormImagePicker';
import listingsApi  from '../api/listings';
import useLocation from '../hooks/useLocation';
import UploadScreen from './UploadScreen';

function ListingEditScreen(props) {
    const location = useLocation();
    const [uploadScreenVisible, setUploadScreenVisible] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleSubmit = async (listing, {resetForm}) => {
        setProgress(0);
        setUploadScreenVisible(true);
        const result = await listingsApi.addListing(
            { ...listing, location },
            (progress) => setProgress(progress)
        );

        if(!result.ok) {
            setUploadScreenVisible(false);
            return alert('Could not save the listing. ');
        }

        resetForm();
    }

    const validationSchema = Yup.object().shape({
        title: Yup.string().required().min(1).label("Title"),
        price: Yup.number().required().min(1).max(10000).label("Price"),
        description: Yup.string().label("Description"),
        category: Yup.object().required().nullable().label("Category"),
        images: Yup.array().min(1, "Please select at least one image.")
    })

    const categories = [
        { label: "Furniture", value: 1, backgroundColor: '#fc5c65', icon: 'floor-lamp' },
        { label: "Cars", value: 2, backgroundColor: '#fd9644', icon: 'car' },
        { label: "Cameras", value: 3, backgroundColor: '#fed330', icon: 'camera' },
        { label: "Games", value: 4, backgroundColor: '#26de81', icon: 'cards' },
        { label: "Clothing", value: 5, backgroundColor: '#2bcbba', icon: 'shoe-heel' },
        { label: "Sports", value: 6, backgroundColor: '#45aaf2', icon: 'basketball' },
        { label: "Movies & Music", value: 7, backgroundColor: '#4b7bec', icon: 'headphones' },
        { label: "Books", value: 8, backgroundColor: '#a97feb', icon: 'book-open-variant' },
        { label: "Other", value: 9, backgroundColor: '#8697af', icon: 'alert-box-outline' }
    ]

    return (
        <Screen style={styles.container}>
            <UploadScreen 
                onDone={() => setUploadScreenVisible(false)} 
                progress={progress} 
                visible={uploadScreenVisible} 
            />
            <AppForm
                initialValues={{
                    title: "",
                    price: "",
                    description: "",
                    category: null,
                    images: []
                }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <FormImagePicker name="images" />
                <AppFormField maxLength={255} name="title" placeholder="Title" />
                <AppFormField
                    keyboardType="numeric"
                    maxLength={8}
                    name="price"
                    placeholder="Price"
                    width={120}
                />
                <AppFormPicker 
                    items={categories}
                    name="category"
                    numberOfColumns={3}
                    PickerItemComponent={CategoryPickerItem}
                    placeholder="Category"
                    width="50%"
                />
                <AppFormField 
                    maxLength={255}
                    multiline
                    name="description"
                    numberOfLines={3}
                    placeholder="Description"
                />
                <SubmitButton title="POST" />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})

export default ListingEditScreen;