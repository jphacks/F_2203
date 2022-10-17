import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  float8: any;
  timestamp: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "artists" */
export type Artists = {
  __typename?: 'artists';
  created_at: Scalars['timestamp'];
  /** fetch data from the table: "favoriteArtists" */
  favoriteArtists: Array<FavoriteArtists>;
  /** An aggregate relationship */
  favoriteArtists_aggregate: FavoriteArtists_Aggregate;
  id: Scalars['Int'];
  image_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /** An array relationship */
  posts: Array<Posts>;
  /** An aggregate relationship */
  posts_aggregate: Posts_Aggregate;
  spotify_id: Scalars['String'];
  updated_at: Scalars['timestamp'];
};


/** columns and relationships of "artists" */
export type ArtistsFavoriteArtistsArgs = {
  distinct_on?: InputMaybe<Array<FavoriteArtists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FavoriteArtists_Order_By>>;
  where?: InputMaybe<FavoriteArtists_Bool_Exp>;
};


/** columns and relationships of "artists" */
export type ArtistsFavoriteArtists_AggregateArgs = {
  distinct_on?: InputMaybe<Array<FavoriteArtists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FavoriteArtists_Order_By>>;
  where?: InputMaybe<FavoriteArtists_Bool_Exp>;
};


/** columns and relationships of "artists" */
export type ArtistsPostsArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};


/** columns and relationships of "artists" */
export type ArtistsPosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};

/** aggregated selection of "artists" */
export type Artists_Aggregate = {
  __typename?: 'artists_aggregate';
  aggregate?: Maybe<Artists_Aggregate_Fields>;
  nodes: Array<Artists>;
};

/** aggregate fields of "artists" */
export type Artists_Aggregate_Fields = {
  __typename?: 'artists_aggregate_fields';
  avg?: Maybe<Artists_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Artists_Max_Fields>;
  min?: Maybe<Artists_Min_Fields>;
  stddev?: Maybe<Artists_Stddev_Fields>;
  stddev_pop?: Maybe<Artists_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Artists_Stddev_Samp_Fields>;
  sum?: Maybe<Artists_Sum_Fields>;
  var_pop?: Maybe<Artists_Var_Pop_Fields>;
  var_samp?: Maybe<Artists_Var_Samp_Fields>;
  variance?: Maybe<Artists_Variance_Fields>;
};


/** aggregate fields of "artists" */
export type Artists_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Artists_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Artists_Avg_Fields = {
  __typename?: 'artists_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "artists". All fields are combined with a logical 'AND'. */
export type Artists_Bool_Exp = {
  _and?: InputMaybe<Array<Artists_Bool_Exp>>;
  _not?: InputMaybe<Artists_Bool_Exp>;
  _or?: InputMaybe<Array<Artists_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  favoriteArtists?: InputMaybe<FavoriteArtists_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  image_url?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  posts?: InputMaybe<Posts_Bool_Exp>;
  spotify_id?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "artists" */
export enum Artists_Constraint {
  /** unique or primary key constraint */
  ArtistsPkey = 'artists_pkey',
  /** unique or primary key constraint */
  ArtistsSpotifyIdKey = 'artists_spotify_id_key'
}

/** input type for incrementing numeric columns in table "artists" */
export type Artists_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "artists" */
export type Artists_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']>;
  favoriteArtists?: InputMaybe<FavoriteArtists_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']>;
  image_url?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  posts?: InputMaybe<Posts_Arr_Rel_Insert_Input>;
  spotify_id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type Artists_Max_Fields = {
  __typename?: 'artists_max_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  image_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  spotify_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** aggregate min on columns */
export type Artists_Min_Fields = {
  __typename?: 'artists_min_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  image_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  spotify_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** response of any mutation on the table "artists" */
export type Artists_Mutation_Response = {
  __typename?: 'artists_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Artists>;
};

/** input type for inserting object relation for remote table "artists" */
export type Artists_Obj_Rel_Insert_Input = {
  data: Artists_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Artists_On_Conflict>;
};

/** on_conflict condition type for table "artists" */
export type Artists_On_Conflict = {
  constraint: Artists_Constraint;
  update_columns?: Array<Artists_Update_Column>;
  where?: InputMaybe<Artists_Bool_Exp>;
};

/** Ordering options when selecting data from "artists". */
export type Artists_Order_By = {
  created_at?: InputMaybe<Order_By>;
  favoriteArtists_aggregate?: InputMaybe<FavoriteArtists_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  posts_aggregate?: InputMaybe<Posts_Aggregate_Order_By>;
  spotify_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: artists */
export type Artists_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "artists" */
export enum Artists_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Name = 'name',
  /** column name */
  SpotifyId = 'spotify_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "artists" */
export type Artists_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  image_url?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  spotify_id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate stddev on columns */
export type Artists_Stddev_Fields = {
  __typename?: 'artists_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Artists_Stddev_Pop_Fields = {
  __typename?: 'artists_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Artists_Stddev_Samp_Fields = {
  __typename?: 'artists_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Artists_Sum_Fields = {
  __typename?: 'artists_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "artists" */
export enum Artists_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Name = 'name',
  /** column name */
  SpotifyId = 'spotify_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Artists_Var_Pop_Fields = {
  __typename?: 'artists_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Artists_Var_Samp_Fields = {
  __typename?: 'artists_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Artists_Variance_Fields = {
  __typename?: 'artists_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** columns and relationships of "favoriteArtists" */
export type FavoriteArtists = {
  __typename?: 'favoriteArtists';
  /** An object relationship */
  artist?: Maybe<Artists>;
  created_at?: Maybe<Scalars['timestamp']>;
  id: Scalars['Int'];
  spotify_id?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  /** An object relationship */
  user?: Maybe<Users>;
};

/** aggregated selection of "favoriteArtists" */
export type FavoriteArtists_Aggregate = {
  __typename?: 'favoriteArtists_aggregate';
  aggregate?: Maybe<FavoriteArtists_Aggregate_Fields>;
  nodes: Array<FavoriteArtists>;
};

/** aggregate fields of "favoriteArtists" */
export type FavoriteArtists_Aggregate_Fields = {
  __typename?: 'favoriteArtists_aggregate_fields';
  avg?: Maybe<FavoriteArtists_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<FavoriteArtists_Max_Fields>;
  min?: Maybe<FavoriteArtists_Min_Fields>;
  stddev?: Maybe<FavoriteArtists_Stddev_Fields>;
  stddev_pop?: Maybe<FavoriteArtists_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<FavoriteArtists_Stddev_Samp_Fields>;
  sum?: Maybe<FavoriteArtists_Sum_Fields>;
  var_pop?: Maybe<FavoriteArtists_Var_Pop_Fields>;
  var_samp?: Maybe<FavoriteArtists_Var_Samp_Fields>;
  variance?: Maybe<FavoriteArtists_Variance_Fields>;
};


/** aggregate fields of "favoriteArtists" */
export type FavoriteArtists_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<FavoriteArtists_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "favoriteArtists" */
export type FavoriteArtists_Aggregate_Order_By = {
  avg?: InputMaybe<FavoriteArtists_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<FavoriteArtists_Max_Order_By>;
  min?: InputMaybe<FavoriteArtists_Min_Order_By>;
  stddev?: InputMaybe<FavoriteArtists_Stddev_Order_By>;
  stddev_pop?: InputMaybe<FavoriteArtists_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<FavoriteArtists_Stddev_Samp_Order_By>;
  sum?: InputMaybe<FavoriteArtists_Sum_Order_By>;
  var_pop?: InputMaybe<FavoriteArtists_Var_Pop_Order_By>;
  var_samp?: InputMaybe<FavoriteArtists_Var_Samp_Order_By>;
  variance?: InputMaybe<FavoriteArtists_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "favoriteArtists" */
export type FavoriteArtists_Arr_Rel_Insert_Input = {
  data: Array<FavoriteArtists_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<FavoriteArtists_On_Conflict>;
};

/** aggregate avg on columns */
export type FavoriteArtists_Avg_Fields = {
  __typename?: 'favoriteArtists_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "favoriteArtists" */
export type FavoriteArtists_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "favoriteArtists". All fields are combined with a logical 'AND'. */
export type FavoriteArtists_Bool_Exp = {
  _and?: InputMaybe<Array<FavoriteArtists_Bool_Exp>>;
  _not?: InputMaybe<FavoriteArtists_Bool_Exp>;
  _or?: InputMaybe<Array<FavoriteArtists_Bool_Exp>>;
  artist?: InputMaybe<Artists_Bool_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  spotify_id?: InputMaybe<String_Comparison_Exp>;
  uid?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "favoriteArtists" */
export enum FavoriteArtists_Constraint {
  /** unique or primary key constraint */
  FavoriteArtistsPkey = 'favoriteArtists_pkey',
  /** unique or primary key constraint */
  FavoriteArtistsSpotifyIdUidKey = 'favoriteArtists_spotify_id_uid_key'
}

/** input type for incrementing numeric columns in table "favoriteArtists" */
export type FavoriteArtists_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "favoriteArtists" */
export type FavoriteArtists_Insert_Input = {
  artist?: InputMaybe<Artists_Obj_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  spotify_id?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type FavoriteArtists_Max_Fields = {
  __typename?: 'favoriteArtists_max_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  spotify_id?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "favoriteArtists" */
export type FavoriteArtists_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  spotify_id?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type FavoriteArtists_Min_Fields = {
  __typename?: 'favoriteArtists_min_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  spotify_id?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** order by min() on columns of table "favoriteArtists" */
export type FavoriteArtists_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  spotify_id?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "favoriteArtists" */
export type FavoriteArtists_Mutation_Response = {
  __typename?: 'favoriteArtists_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<FavoriteArtists>;
};

/** on_conflict condition type for table "favoriteArtists" */
export type FavoriteArtists_On_Conflict = {
  constraint: FavoriteArtists_Constraint;
  update_columns?: Array<FavoriteArtists_Update_Column>;
  where?: InputMaybe<FavoriteArtists_Bool_Exp>;
};

/** Ordering options when selecting data from "favoriteArtists". */
export type FavoriteArtists_Order_By = {
  artist?: InputMaybe<Artists_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  spotify_id?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: favoriteArtists */
export type FavoriteArtists_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "favoriteArtists" */
export enum FavoriteArtists_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  SpotifyId = 'spotify_id',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "favoriteArtists" */
export type FavoriteArtists_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  spotify_id?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate stddev on columns */
export type FavoriteArtists_Stddev_Fields = {
  __typename?: 'favoriteArtists_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "favoriteArtists" */
export type FavoriteArtists_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type FavoriteArtists_Stddev_Pop_Fields = {
  __typename?: 'favoriteArtists_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "favoriteArtists" */
export type FavoriteArtists_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type FavoriteArtists_Stddev_Samp_Fields = {
  __typename?: 'favoriteArtists_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "favoriteArtists" */
export type FavoriteArtists_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type FavoriteArtists_Sum_Fields = {
  __typename?: 'favoriteArtists_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "favoriteArtists" */
export type FavoriteArtists_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** update columns of table "favoriteArtists" */
export enum FavoriteArtists_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  SpotifyId = 'spotify_id',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type FavoriteArtists_Var_Pop_Fields = {
  __typename?: 'favoriteArtists_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "favoriteArtists" */
export type FavoriteArtists_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type FavoriteArtists_Var_Samp_Fields = {
  __typename?: 'favoriteArtists_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "favoriteArtists" */
export type FavoriteArtists_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type FavoriteArtists_Variance_Fields = {
  __typename?: 'favoriteArtists_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "favoriteArtists" */
export type FavoriteArtists_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['float8']>;
  _gt?: InputMaybe<Scalars['float8']>;
  _gte?: InputMaybe<Scalars['float8']>;
  _in?: InputMaybe<Array<Scalars['float8']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['float8']>;
  _lte?: InputMaybe<Scalars['float8']>;
  _neq?: InputMaybe<Scalars['float8']>;
  _nin?: InputMaybe<Array<Scalars['float8']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "artists" */
  delete_artists?: Maybe<Artists_Mutation_Response>;
  /** delete single row from the table: "artists" */
  delete_artists_by_pk?: Maybe<Artists>;
  /** delete data from the table: "favoriteArtists" */
  delete_favoriteArtists?: Maybe<FavoriteArtists_Mutation_Response>;
  /** delete single row from the table: "favoriteArtists" */
  delete_favoriteArtists_by_pk?: Maybe<FavoriteArtists>;
  /** delete data from the table: "posts" */
  delete_posts?: Maybe<Posts_Mutation_Response>;
  /** delete single row from the table: "posts" */
  delete_posts_by_pk?: Maybe<Posts>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "artists" */
  insert_artists?: Maybe<Artists_Mutation_Response>;
  /** insert a single row into the table: "artists" */
  insert_artists_one?: Maybe<Artists>;
  /** insert data into the table: "favoriteArtists" */
  insert_favoriteArtists?: Maybe<FavoriteArtists_Mutation_Response>;
  /** insert a single row into the table: "favoriteArtists" */
  insert_favoriteArtists_one?: Maybe<FavoriteArtists>;
  /** insert data into the table: "posts" */
  insert_posts?: Maybe<Posts_Mutation_Response>;
  /** insert a single row into the table: "posts" */
  insert_posts_one?: Maybe<Posts>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "artists" */
  update_artists?: Maybe<Artists_Mutation_Response>;
  /** update single row of the table: "artists" */
  update_artists_by_pk?: Maybe<Artists>;
  /** update data of the table: "favoriteArtists" */
  update_favoriteArtists?: Maybe<FavoriteArtists_Mutation_Response>;
  /** update single row of the table: "favoriteArtists" */
  update_favoriteArtists_by_pk?: Maybe<FavoriteArtists>;
  /** update data of the table: "posts" */
  update_posts?: Maybe<Posts_Mutation_Response>;
  /** update single row of the table: "posts" */
  update_posts_by_pk?: Maybe<Posts>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_ArtistsArgs = {
  where: Artists_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Artists_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_FavoriteArtistsArgs = {
  where: FavoriteArtists_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_FavoriteArtists_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_PostsArgs = {
  where: Posts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Posts_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  uid: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_ArtistsArgs = {
  objects: Array<Artists_Insert_Input>;
  on_conflict?: InputMaybe<Artists_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Artists_OneArgs = {
  object: Artists_Insert_Input;
  on_conflict?: InputMaybe<Artists_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_FavoriteArtistsArgs = {
  objects: Array<FavoriteArtists_Insert_Input>;
  on_conflict?: InputMaybe<FavoriteArtists_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_FavoriteArtists_OneArgs = {
  object: FavoriteArtists_Insert_Input;
  on_conflict?: InputMaybe<FavoriteArtists_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PostsArgs = {
  objects: Array<Posts_Insert_Input>;
  on_conflict?: InputMaybe<Posts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Posts_OneArgs = {
  object: Posts_Insert_Input;
  on_conflict?: InputMaybe<Posts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_ArtistsArgs = {
  _inc?: InputMaybe<Artists_Inc_Input>;
  _set?: InputMaybe<Artists_Set_Input>;
  where: Artists_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Artists_By_PkArgs = {
  _inc?: InputMaybe<Artists_Inc_Input>;
  _set?: InputMaybe<Artists_Set_Input>;
  pk_columns: Artists_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_FavoriteArtistsArgs = {
  _inc?: InputMaybe<FavoriteArtists_Inc_Input>;
  _set?: InputMaybe<FavoriteArtists_Set_Input>;
  where: FavoriteArtists_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_FavoriteArtists_By_PkArgs = {
  _inc?: InputMaybe<FavoriteArtists_Inc_Input>;
  _set?: InputMaybe<FavoriteArtists_Set_Input>;
  pk_columns: FavoriteArtists_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PostsArgs = {
  _inc?: InputMaybe<Posts_Inc_Input>;
  _set?: InputMaybe<Posts_Set_Input>;
  where: Posts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Posts_By_PkArgs = {
  _inc?: InputMaybe<Posts_Inc_Input>;
  _set?: InputMaybe<Posts_Set_Input>;
  pk_columns: Posts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "posts" */
export type Posts = {
  __typename?: 'posts';
  /** An object relationship */
  artist?: Maybe<Artists>;
  created_at: Scalars['timestamp'];
  date?: Maybe<Scalars['date']>;
  id: Scalars['Int'];
  link?: Maybe<Scalars['String']>;
  location_lat?: Maybe<Scalars['float8']>;
  location_lng?: Maybe<Scalars['float8']>;
  location_name?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  spotify_id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  /** An object relationship */
  user?: Maybe<Users>;
};

/** aggregated selection of "posts" */
export type Posts_Aggregate = {
  __typename?: 'posts_aggregate';
  aggregate?: Maybe<Posts_Aggregate_Fields>;
  nodes: Array<Posts>;
};

/** aggregate fields of "posts" */
export type Posts_Aggregate_Fields = {
  __typename?: 'posts_aggregate_fields';
  avg?: Maybe<Posts_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Posts_Max_Fields>;
  min?: Maybe<Posts_Min_Fields>;
  stddev?: Maybe<Posts_Stddev_Fields>;
  stddev_pop?: Maybe<Posts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Posts_Stddev_Samp_Fields>;
  sum?: Maybe<Posts_Sum_Fields>;
  var_pop?: Maybe<Posts_Var_Pop_Fields>;
  var_samp?: Maybe<Posts_Var_Samp_Fields>;
  variance?: Maybe<Posts_Variance_Fields>;
};


/** aggregate fields of "posts" */
export type Posts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Posts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "posts" */
export type Posts_Aggregate_Order_By = {
  avg?: InputMaybe<Posts_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Posts_Max_Order_By>;
  min?: InputMaybe<Posts_Min_Order_By>;
  stddev?: InputMaybe<Posts_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Posts_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Posts_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Posts_Sum_Order_By>;
  var_pop?: InputMaybe<Posts_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Posts_Var_Samp_Order_By>;
  variance?: InputMaybe<Posts_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "posts" */
export type Posts_Arr_Rel_Insert_Input = {
  data: Array<Posts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Posts_On_Conflict>;
};

/** aggregate avg on columns */
export type Posts_Avg_Fields = {
  __typename?: 'posts_avg_fields';
  id?: Maybe<Scalars['Float']>;
  location_lat?: Maybe<Scalars['Float']>;
  location_lng?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "posts" */
export type Posts_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  location_lat?: InputMaybe<Order_By>;
  location_lng?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "posts". All fields are combined with a logical 'AND'. */
export type Posts_Bool_Exp = {
  _and?: InputMaybe<Array<Posts_Bool_Exp>>;
  _not?: InputMaybe<Posts_Bool_Exp>;
  _or?: InputMaybe<Array<Posts_Bool_Exp>>;
  artist?: InputMaybe<Artists_Bool_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  date?: InputMaybe<Date_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  link?: InputMaybe<String_Comparison_Exp>;
  location_lat?: InputMaybe<Float8_Comparison_Exp>;
  location_lng?: InputMaybe<Float8_Comparison_Exp>;
  location_name?: InputMaybe<String_Comparison_Exp>;
  message?: InputMaybe<String_Comparison_Exp>;
  spotify_id?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  uid?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "posts" */
export enum Posts_Constraint {
  /** unique or primary key constraint */
  PostsPkey = 'posts_pkey'
}

/** input type for incrementing numeric columns in table "posts" */
export type Posts_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  location_lat?: InputMaybe<Scalars['float8']>;
  location_lng?: InputMaybe<Scalars['float8']>;
};

/** input type for inserting data into table "posts" */
export type Posts_Insert_Input = {
  artist?: InputMaybe<Artists_Obj_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  date?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['Int']>;
  link?: InputMaybe<Scalars['String']>;
  location_lat?: InputMaybe<Scalars['float8']>;
  location_lng?: InputMaybe<Scalars['float8']>;
  location_name?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  spotify_id?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Posts_Max_Fields = {
  __typename?: 'posts_max_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  date?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  link?: Maybe<Scalars['String']>;
  location_lat?: Maybe<Scalars['float8']>;
  location_lng?: Maybe<Scalars['float8']>;
  location_name?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  spotify_id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "posts" */
export type Posts_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  link?: InputMaybe<Order_By>;
  location_lat?: InputMaybe<Order_By>;
  location_lng?: InputMaybe<Order_By>;
  location_name?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  spotify_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Posts_Min_Fields = {
  __typename?: 'posts_min_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  date?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  link?: Maybe<Scalars['String']>;
  location_lat?: Maybe<Scalars['float8']>;
  location_lng?: Maybe<Scalars['float8']>;
  location_name?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  spotify_id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** order by min() on columns of table "posts" */
export type Posts_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  link?: InputMaybe<Order_By>;
  location_lat?: InputMaybe<Order_By>;
  location_lng?: InputMaybe<Order_By>;
  location_name?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  spotify_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "posts" */
export type Posts_Mutation_Response = {
  __typename?: 'posts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Posts>;
};

/** on_conflict condition type for table "posts" */
export type Posts_On_Conflict = {
  constraint: Posts_Constraint;
  update_columns?: Array<Posts_Update_Column>;
  where?: InputMaybe<Posts_Bool_Exp>;
};

/** Ordering options when selecting data from "posts". */
export type Posts_Order_By = {
  artist?: InputMaybe<Artists_Order_By>;
  created_at?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  link?: InputMaybe<Order_By>;
  location_lat?: InputMaybe<Order_By>;
  location_lng?: InputMaybe<Order_By>;
  location_name?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  spotify_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: posts */
export type Posts_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "posts" */
export enum Posts_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  Link = 'link',
  /** column name */
  LocationLat = 'location_lat',
  /** column name */
  LocationLng = 'location_lng',
  /** column name */
  LocationName = 'location_name',
  /** column name */
  Message = 'message',
  /** column name */
  SpotifyId = 'spotify_id',
  /** column name */
  Title = 'title',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "posts" */
export type Posts_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']>;
  date?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['Int']>;
  link?: InputMaybe<Scalars['String']>;
  location_lat?: InputMaybe<Scalars['float8']>;
  location_lng?: InputMaybe<Scalars['float8']>;
  location_name?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  spotify_id?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate stddev on columns */
export type Posts_Stddev_Fields = {
  __typename?: 'posts_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  location_lat?: Maybe<Scalars['Float']>;
  location_lng?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "posts" */
export type Posts_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  location_lat?: InputMaybe<Order_By>;
  location_lng?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Posts_Stddev_Pop_Fields = {
  __typename?: 'posts_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  location_lat?: Maybe<Scalars['Float']>;
  location_lng?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "posts" */
export type Posts_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  location_lat?: InputMaybe<Order_By>;
  location_lng?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Posts_Stddev_Samp_Fields = {
  __typename?: 'posts_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  location_lat?: Maybe<Scalars['Float']>;
  location_lng?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "posts" */
export type Posts_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  location_lat?: InputMaybe<Order_By>;
  location_lng?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Posts_Sum_Fields = {
  __typename?: 'posts_sum_fields';
  id?: Maybe<Scalars['Int']>;
  location_lat?: Maybe<Scalars['float8']>;
  location_lng?: Maybe<Scalars['float8']>;
};

/** order by sum() on columns of table "posts" */
export type Posts_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  location_lat?: InputMaybe<Order_By>;
  location_lng?: InputMaybe<Order_By>;
};

/** update columns of table "posts" */
export enum Posts_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  Link = 'link',
  /** column name */
  LocationLat = 'location_lat',
  /** column name */
  LocationLng = 'location_lng',
  /** column name */
  LocationName = 'location_name',
  /** column name */
  Message = 'message',
  /** column name */
  SpotifyId = 'spotify_id',
  /** column name */
  Title = 'title',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Posts_Var_Pop_Fields = {
  __typename?: 'posts_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  location_lat?: Maybe<Scalars['Float']>;
  location_lng?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "posts" */
export type Posts_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  location_lat?: InputMaybe<Order_By>;
  location_lng?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Posts_Var_Samp_Fields = {
  __typename?: 'posts_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  location_lat?: Maybe<Scalars['Float']>;
  location_lng?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "posts" */
export type Posts_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  location_lat?: InputMaybe<Order_By>;
  location_lng?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Posts_Variance_Fields = {
  __typename?: 'posts_variance_fields';
  id?: Maybe<Scalars['Float']>;
  location_lat?: Maybe<Scalars['Float']>;
  location_lng?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "posts" */
export type Posts_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  location_lat?: InputMaybe<Order_By>;
  location_lng?: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "artists" */
  artists: Array<Artists>;
  /** fetch aggregated fields from the table: "artists" */
  artists_aggregate: Artists_Aggregate;
  /** fetch data from the table: "artists" using primary key columns */
  artists_by_pk?: Maybe<Artists>;
  /** fetch data from the table: "favoriteArtists" */
  favoriteArtists: Array<FavoriteArtists>;
  /** An aggregate relationship */
  favoriteArtists_aggregate: FavoriteArtists_Aggregate;
  /** fetch data from the table: "favoriteArtists" using primary key columns */
  favoriteArtists_by_pk?: Maybe<FavoriteArtists>;
  /** An array relationship */
  posts: Array<Posts>;
  /** An aggregate relationship */
  posts_aggregate: Posts_Aggregate;
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootArtistsArgs = {
  distinct_on?: InputMaybe<Array<Artists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Artists_Order_By>>;
  where?: InputMaybe<Artists_Bool_Exp>;
};


export type Query_RootArtists_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Artists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Artists_Order_By>>;
  where?: InputMaybe<Artists_Bool_Exp>;
};


export type Query_RootArtists_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootFavoriteArtistsArgs = {
  distinct_on?: InputMaybe<Array<FavoriteArtists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FavoriteArtists_Order_By>>;
  where?: InputMaybe<FavoriteArtists_Bool_Exp>;
};


export type Query_RootFavoriteArtists_AggregateArgs = {
  distinct_on?: InputMaybe<Array<FavoriteArtists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FavoriteArtists_Order_By>>;
  where?: InputMaybe<FavoriteArtists_Bool_Exp>;
};


export type Query_RootFavoriteArtists_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootPostsArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};


export type Query_RootPosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};


export type Query_RootPosts_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  uid: Scalars['String'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "artists" */
  artists: Array<Artists>;
  /** fetch aggregated fields from the table: "artists" */
  artists_aggregate: Artists_Aggregate;
  /** fetch data from the table: "artists" using primary key columns */
  artists_by_pk?: Maybe<Artists>;
  /** fetch data from the table: "favoriteArtists" */
  favoriteArtists: Array<FavoriteArtists>;
  /** An aggregate relationship */
  favoriteArtists_aggregate: FavoriteArtists_Aggregate;
  /** fetch data from the table: "favoriteArtists" using primary key columns */
  favoriteArtists_by_pk?: Maybe<FavoriteArtists>;
  /** An array relationship */
  posts: Array<Posts>;
  /** An aggregate relationship */
  posts_aggregate: Posts_Aggregate;
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Subscription_RootArtistsArgs = {
  distinct_on?: InputMaybe<Array<Artists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Artists_Order_By>>;
  where?: InputMaybe<Artists_Bool_Exp>;
};


export type Subscription_RootArtists_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Artists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Artists_Order_By>>;
  where?: InputMaybe<Artists_Bool_Exp>;
};


export type Subscription_RootArtists_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootFavoriteArtistsArgs = {
  distinct_on?: InputMaybe<Array<FavoriteArtists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FavoriteArtists_Order_By>>;
  where?: InputMaybe<FavoriteArtists_Bool_Exp>;
};


export type Subscription_RootFavoriteArtists_AggregateArgs = {
  distinct_on?: InputMaybe<Array<FavoriteArtists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FavoriteArtists_Order_By>>;
  where?: InputMaybe<FavoriteArtists_Bool_Exp>;
};


export type Subscription_RootFavoriteArtists_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootPostsArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};


export type Subscription_RootPosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};


export type Subscription_RootPosts_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  uid: Scalars['String'];
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  avatar_url?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamp'];
  custom_id?: Maybe<Scalars['String']>;
  /** fetch data from the table: "favoriteArtists" */
  favoriteArtists: Array<FavoriteArtists>;
  /** An aggregate relationship */
  favoriteArtists_aggregate: FavoriteArtists_Aggregate;
  id: Scalars['Int'];
  instagram_id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /** An array relationship */
  posts: Array<Posts>;
  /** An aggregate relationship */
  posts_aggregate: Posts_Aggregate;
  twitter_id?: Maybe<Scalars['String']>;
  uid: Scalars['String'];
  updated_at: Scalars['timestamp'];
};


/** columns and relationships of "users" */
export type UsersFavoriteArtistsArgs = {
  distinct_on?: InputMaybe<Array<FavoriteArtists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FavoriteArtists_Order_By>>;
  where?: InputMaybe<FavoriteArtists_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFavoriteArtists_AggregateArgs = {
  distinct_on?: InputMaybe<Array<FavoriteArtists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FavoriteArtists_Order_By>>;
  where?: InputMaybe<FavoriteArtists_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersPostsArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersPosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  avatar_url?: InputMaybe<String_Comparison_Exp>;
  bio?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  custom_id?: InputMaybe<String_Comparison_Exp>;
  favoriteArtists?: InputMaybe<FavoriteArtists_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  instagram_id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  posts?: InputMaybe<Posts_Bool_Exp>;
  twitter_id?: InputMaybe<String_Comparison_Exp>;
  uid?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersCustomIdKey = 'users_custom_id_key',
  /** unique or primary key constraint */
  UsersIdKey = 'users_id_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  avatar_url?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  custom_id?: InputMaybe<Scalars['String']>;
  favoriteArtists?: InputMaybe<FavoriteArtists_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']>;
  instagram_id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  posts?: InputMaybe<Posts_Arr_Rel_Insert_Input>;
  twitter_id?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  avatar_url?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamp']>;
  custom_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  instagram_id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  twitter_id?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  avatar_url?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamp']>;
  custom_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  instagram_id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  twitter_id?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  avatar_url?: InputMaybe<Order_By>;
  bio?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  custom_id?: InputMaybe<Order_By>;
  favoriteArtists_aggregate?: InputMaybe<FavoriteArtists_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  instagram_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  posts_aggregate?: InputMaybe<Posts_Aggregate_Order_By>;
  twitter_id?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  uid: Scalars['String'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  AvatarUrl = 'avatar_url',
  /** column name */
  Bio = 'bio',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomId = 'custom_id',
  /** column name */
  Id = 'id',
  /** column name */
  InstagramId = 'instagram_id',
  /** column name */
  Name = 'name',
  /** column name */
  TwitterId = 'twitter_id',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  avatar_url?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  custom_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  instagram_id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  twitter_id?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  AvatarUrl = 'avatar_url',
  /** column name */
  Bio = 'bio',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomId = 'custom_id',
  /** column name */
  Id = 'id',
  /** column name */
  InstagramId = 'instagram_id',
  /** column name */
  Name = 'name',
  /** column name */
  TwitterId = 'twitter_id',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type CreateUserMutationVariables = Exact<{
  uid: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  custom_id: Scalars['String'];
  bio?: InputMaybe<Scalars['String']>;
  avatar_url?: InputMaybe<Scalars['String']>;
}>;


export type CreateUserMutation = { __typename?: 'mutation_root', insert_users_one?: { __typename?: 'users', uid: string, name?: string | null, bio?: string | null, avatar_url?: string | null, custom_id?: string | null, instagram_id?: string | null, twitter_id?: string | null } | null };

export type GetFavoriteArtistsByUidQueryVariables = Exact<{
  uid: Scalars['String'];
}>;


export type GetFavoriteArtistsByUidQuery = { __typename?: 'query_root', artists: Array<{ __typename?: 'favoriteArtists', artist?: { __typename?: 'artists', spotify_id: string, name?: string | null, image_url?: string | null } | null }> };

export type GetUserByCustomIdQueryVariables = Exact<{
  customId: Scalars['String'];
}>;


export type GetUserByCustomIdQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', name?: string | null, bio?: string | null, avatar_url?: string | null, twitter_id?: string | null, instagram_id?: string | null, custom_id?: string | null, uid: string, id: number }> };

export type GetUserPostsByUidQueryVariables = Exact<{
  uid: Scalars['String'];
}>;


export type GetUserPostsByUidQuery = { __typename?: 'query_root', posts: Array<{ __typename?: 'posts', title?: string | null, message?: string | null, location_name?: string | null, location_lng?: any | null, location_lat?: any | null, link?: string | null, id: number }> };

export type UpsertPostWithArtistMutationVariables = Exact<{
  title: Scalars['String'];
  message?: InputMaybe<Scalars['String']>;
  location_name: Scalars['String'];
  location_lng: Scalars['float8'];
  location_lat: Scalars['float8'];
  link?: InputMaybe<Scalars['String']>;
  uid: Scalars['String'];
  spotify_id: Scalars['String'];
  name: Scalars['String'];
  image_url: Scalars['String'];
}>;


export type UpsertPostWithArtistMutation = { __typename?: 'mutation_root', insert_posts_one?: { __typename?: 'posts', id: number } | null };

export type GetUserByUidQueryVariables = Exact<{
  uid: Scalars['String'];
}>;


export type GetUserByUidQuery = { __typename?: 'query_root', user?: { __typename?: 'users', avatar_url?: string | null, bio?: string | null, id: number, custom_id?: string | null, name?: string | null, instagram_id?: string | null, twitter_id?: string | null } | null };


export const CreateUserDocument = gql`
    mutation CreateUser($uid: String!, $name: String = "", $custom_id: String!, $bio: String = "", $avatar_url: String = "") {
  insert_users_one(
    object: {uid: $uid, name: $name, custom_id: $custom_id, bio: $bio, avatar_url: $avatar_url}
  ) {
    uid
    name
    bio
    avatar_url
    custom_id
    instagram_id
    twitter_id
  }
}
    `;
export const GetFavoriteArtistsByUidDocument = gql`
    query GetFavoriteArtistsByUid($uid: String!) {
  artists: favoriteArtists(where: {uid: {_eq: $uid}}) {
    artist {
      spotify_id
      name
      image_url
    }
  }
}
    `;
export const GetUserByCustomIdDocument = gql`
    query GetUserByCustomId($customId: String!) {
  users(where: {custom_id: {_eq: $customId}}) {
    name
    bio
    avatar_url
    twitter_id
    instagram_id
    custom_id
    uid
    id
  }
}
    `;
export const GetUserPostsByUidDocument = gql`
    query GetUserPostsByUid($uid: String!) {
  posts(where: {uid: {_eq: $uid}}) {
    title
    message
    location_name
    location_lng
    location_lat
    link
    id
  }
}
    `;
export const UpsertPostWithArtistDocument = gql`
    mutation UpsertPostWithArtist($title: String!, $message: String = "", $location_name: String!, $location_lng: float8!, $location_lat: float8!, $link: String = "", $uid: String!, $spotify_id: String!, $name: String!, $image_url: String!) {
  insert_posts_one(
    object: {title: $title, message: $message, location_name: $location_name, location_lng: $location_lng, location_lat: $location_lat, link: $link, uid: $uid, artist: {data: {spotify_id: $spotify_id, name: $name, image_url: $image_url, favoriteArtists: {data: {uid: $uid}, on_conflict: {constraint: favoriteArtists_spotify_id_uid_key, update_columns: spotify_id}}}, on_conflict: {constraint: artists_spotify_id_key, update_columns: image_url}}}
  ) {
    id
  }
}
    `;
export const GetUserByUidDocument = gql`
    query getUserByUid($uid: String!) {
  user: users_by_pk(uid: $uid) {
    avatar_url
    bio
    id
    custom_id
    name
    instagram_id
    twitter_id
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    CreateUser(variables: CreateUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateUserMutation>(CreateUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateUser', 'mutation');
    },
    GetFavoriteArtistsByUid(variables: GetFavoriteArtistsByUidQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetFavoriteArtistsByUidQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetFavoriteArtistsByUidQuery>(GetFavoriteArtistsByUidDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetFavoriteArtistsByUid', 'query');
    },
    GetUserByCustomId(variables: GetUserByCustomIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUserByCustomIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserByCustomIdQuery>(GetUserByCustomIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetUserByCustomId', 'query');
    },
    GetUserPostsByUid(variables: GetUserPostsByUidQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUserPostsByUidQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserPostsByUidQuery>(GetUserPostsByUidDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetUserPostsByUid', 'query');
    },
    UpsertPostWithArtist(variables: UpsertPostWithArtistMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpsertPostWithArtistMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpsertPostWithArtistMutation>(UpsertPostWithArtistDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpsertPostWithArtist', 'mutation');
    },
    getUserByUid(variables: GetUserByUidQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUserByUidQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserByUidQuery>(GetUserByUidDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUserByUid', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;