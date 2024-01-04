import Hashtag from '../models/hashtag.js';

class HashtagRepository {
    async createHashtag (data) {
        try {
            const tag = await Hashtag.create(data);
            return tag;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async bulkcreate (data) {
        try {
            const tags = await Hashtag.insertMany(data);
            return tags;
        } catch (error) {
            console.log(error);
            throw(error);
        }
    }
    async getHashtag (id) {
        try {
            const tag = await Hashtag.findById(id);
            return tag;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async deleteHashtag (id) {
        try {
            const response = await Hashtag.findByIdAndRemove(id);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async findAll (titleTags) {
        try {
            const tags = await Hashtag.find({
                title: titleTags
            });
            return tags;
        } catch (error) {
            console.log(error);
            throw(error);
        }
    }

}

export default HashtagRepository;