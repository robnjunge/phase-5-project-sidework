"""Create tables

Revision ID: f0be39599da6
Revises: 
Create Date: 2023-11-27 23:55:22.796942

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f0be39599da6'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('asset_table',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('asset_name', sa.String(length=255), nullable=False),
    sa.Column('model', sa.String(length=255), nullable=False),
    sa.Column('date_purchased', sa.DateTime(), nullable=True),
    sa.Column('image_url', sa.String(length=255), nullable=True),
    sa.Column('manufacturer', sa.String(length=255), nullable=True),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.Column('status', sa.String(length=50), nullable=True),
    sa.Column('category', sa.String(length=50), nullable=True),
    sa.Column('serial_number', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('full_name', sa.String(length=255), nullable=False),
    sa.Column('username', sa.String(length=50), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('password_hash', sa.String(length=255), nullable=False),
    sa.Column('role', sa.String(length=50), nullable=True),
    sa.Column('department', sa.String(length=255), nullable=False),
    sa.Column('employed_on', sa.DateTime(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('username')
    )
    op.create_table('assignment',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('asset_id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('assignment_date', sa.Date(), nullable=True),
    sa.Column('return_date', sa.Date(), nullable=True),
    sa.ForeignKeyConstraint(['asset_id'], ['asset_table.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('asset_id')
    )
    op.create_table('maintenance',
    sa.Column('maintenance_id', sa.Integer(), nullable=False),
    sa.Column('asset_id', sa.Integer(), nullable=False),
    sa.Column('date_of_maintenance', sa.Date(), nullable=True),
    sa.Column('type', sa.String(length=50), nullable=True),
    sa.Column('description', sa.String(length=255), nullable=True),
    sa.Column('cost', sa.Float(), nullable=True),
    sa.Column('completion_status', sa.String(length=20), nullable=True),
    sa.ForeignKeyConstraint(['asset_id'], ['asset_table.id'], ),
    sa.PrimaryKeyConstraint('maintenance_id'),
    sa.UniqueConstraint('asset_id')
    )
    op.create_table('requests',
    sa.Column('request_id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('asset_name', sa.String(length=255), nullable=True),
    sa.Column('description', sa.String(length=255), nullable=True),
    sa.Column('quantity', sa.Integer(), nullable=True),
    sa.Column('urgency', sa.String(), nullable=True),
    sa.Column('status', sa.String(length=50), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('request_id')
    )
    op.create_table('transaction',
    sa.Column('transaction_id', sa.Integer(), nullable=False),
    sa.Column('asset_id', sa.Integer(), nullable=False),
    sa.Column('transaction_type', sa.String(length=50), nullable=True),
    sa.Column('transaction_date', sa.Date(), nullable=True),
    sa.ForeignKeyConstraint(['asset_id'], ['asset_table.id'], ),
    sa.PrimaryKeyConstraint('transaction_id'),
    sa.UniqueConstraint('asset_id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('transaction')
    op.drop_table('requests')
    op.drop_table('maintenance')
    op.drop_table('assignment')
    op.drop_table('user')
    op.drop_table('asset_table')
    # ### end Alembic commands ###